// ⌘K search — client-side full-text over every page's rendered content.
// The index is built lazily on first open by rendering each route off-DOM and
// attributing text to its on-this-page anchors, so results deep-link to the
// right section.
import { ORDER, PAGE_META, ANCHORS } from './data.js';
import { getPageHtml } from './router.js';
import { scrollTo } from './ui.js';

let index = null;
let results = [];
let active = 0;

const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const norm = s => s.replace(/\s+/g, ' ').trim();

function buildIndex() {
  if (index) return index;
  index = [];
  const parser = new DOMParser();
  for (const route of ORDER) {
    const doc = parser.parseFromString(getPageHtml(route), 'text/html');
    const page = PAGE_META[route]?.t || route;
    const seen = new Set();
    for (const [id, label] of (ANCHORS[route] || [])) {
      const el = doc.getElementById(id);
      if (!el) continue;
      const text = norm(el.textContent || '');
      seen.add(id);
      if (text) index.push({ route, id, page, label, text });
    }
    // page-level entry catches content outside any anchor
    const body = norm(doc.body.textContent || '');
    index.push({ route, id: null, page, label: null, text: body });
  }
  return index;
}

function search(query) {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  const scored = [];
  for (const entry of buildIndex()) {
    const title = (entry.page + ' ' + (entry.label || '')).toLowerCase();
    const text = entry.text.toLowerCase();
    let score = 0;
    let ok = true;
    for (const t of tokens) {
      const inTitle = title.includes(t);
      const inText = text.includes(t);
      if (!inTitle && !inText) { ok = false; break; }
      score += (inTitle ? 5 : 0) + (inText ? 1 : 0);
    }
    if (!ok) continue;
    if (entry.id === null) score -= 2;   // prefer section hits over whole-page
    scored.push({ entry, score, tokens });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 10);
}

function snippet(entry, tokens) {
  const lower = entry.text.toLowerCase();
  let at = -1;
  for (const t of tokens) { at = lower.indexOf(t); if (at !== -1) break; }
  if (at === -1) at = 0;
  const start = Math.max(0, at - 50);
  let s = (start > 0 ? '…' : '') + entry.text.slice(start, start + 150)
        + (start + 150 < entry.text.length ? '…' : '');
  s = esc(s);
  for (const t of tokens) {
    s = s.replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig'), '<mark>$1</mark>');
  }
  return s;
}

function render() {
  const list = document.getElementById('search-results');
  const q = document.getElementById('search-input').value;
  if (!q.trim()) {
    list.innerHTML = '<div class="search-hint">Type to search every page — titles, sections, and body text.</div>';
    return;
  }
  if (!results.length) {
    list.innerHTML = `<div class="search-hint">No matches for “${esc(q)}”.</div>`;
    return;
  }
  list.innerHTML = results.map((r, i) => `
    <div class="search-result${i === active ? ' active' : ''}" data-i="${i}">
      <div class="search-result-title">${esc(r.entry.page)}${r.entry.label ? ` <span class="search-sep">›</span> ${esc(r.entry.label)}` : ''}</div>
      <div class="search-result-snippet">${snippet(r.entry, r.tokens)}</div>
    </div>`).join('');
  list.querySelector('.active')?.scrollIntoView({ block: 'nearest' });
}

function go(i) {
  const r = results[i];
  if (!r) return;
  close();
  location.hash = '#' + r.entry.route;
  if (r.entry.id) setTimeout(() => scrollTo(r.entry.id), 420);
}

function open() {
  document.getElementById('search-overlay').style.display = 'flex';
  const input = document.getElementById('search-input');
  input.value = '';
  results = []; active = 0;
  render();
  input.focus();
}

function close() {
  document.getElementById('search-overlay').style.display = 'none';
}

export function initSearch() {
  const overlay = document.createElement('div');
  overlay.id = 'search-overlay';
  overlay.innerHTML = `
    <div id="search-modal">
      <div class="search-input-row">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="search-input" type="text" placeholder="Search the docs…" autocomplete="off" spellcheck="false">
        <span class="kbd">esc</span>
      </div>
      <div id="search-results"></div>
    </div>`;
  document.body.appendChild(overlay);

  document.getElementById('search-box').addEventListener('click', open);
  overlay.addEventListener('mousedown', e => { if (e.target === overlay) close(); });

  const input = document.getElementById('search-input');
  input.addEventListener('input', () => {
    results = search(input.value); active = 0; render();
  });

  document.getElementById('search-results').addEventListener('click', e => {
    const hit = e.target.closest('.search-result');
    if (hit) go(Number(hit.dataset.i));
  });

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      open();
      return;
    }
    if (document.getElementById('search-overlay').style.display !== 'flex') return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, results.length - 1); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); render(); }
    else if (e.key === 'Enter') go(active);
  });
}
