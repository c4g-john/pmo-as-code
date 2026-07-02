import { NAV, PAGE_META, ORDER, ANCHORS } from './data.js';

export function go(route) {
  location.hash = route;
}

export function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: 'smooth' });
}

export function provenanceFooter(route) {
  const src = (PAGE_META[route] || {}).src || 'index.html';
  const gh = `https://github.com/c4g-john/pmo-as-code/blob/main/${src}`;
  return `<footer class="provenance">
    <span style="display:inline-flex;align-items:center;gap:7px;">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
      <a href="${gh}" target="_blank" rel="noopener" style="color:var(--ink-2);text-decoration:none;">${src}</a>
    </span>
    <span class="prov-sep">|</span>
    <span>written and maintained by John Tanner · C4G Enterprises</span>
    <a class="prov-edit" href="${gh}" target="_blank" rel="noopener">Edit on GitHub →</a>
  </footer>`;
}

export function pageNavHtml(route) {
  const i = ORDER.indexOf(route);
  let prev = '', next = '';
  if (i > 0) {
    const r = ORDER[i - 1];
    prev = `<a class="page-nav-link" href="#${r}"><div class="page-nav-label">← previous</div><div class="page-nav-title">${PAGE_META[r].t}</div></a>`;
  }
  if (i >= 0 && i < ORDER.length - 1) {
    const r = ORDER[i + 1];
    next = `<a class="page-nav-link next" href="#${r}"><div class="page-nav-label">next →</div><div class="page-nav-title">${PAGE_META[r].t}</div></a>`;
  }
  return `<div class="page-nav">${prev}${next}</div>`;
}

export function cb(filename, code) {
  const id = 'cb-' + Math.random().toString(36).slice(2);
  return `<div class="code-block">
    <div class="code-titlebar">
      <span class="traffic-light" style="background:#ff5f57;"></span>
      <span class="traffic-light" style="background:#febc2e;"></span>
      <span class="traffic-light" style="background:#28c840;"></span>
      <span class="code-filename">${filename}</span>
      <button class="copy-btn" data-copy-id="${id}" title="Copy">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
      </button>
    </div>
    <pre class="code-pre" id="${id}">${code}</pre>
  </div>`;
}

export function renderSidebar(route) {
  return NAV.map(group => `
    <div class="nav-group">
      <div class="nav-group-header">
        ${group.layer ? `<span class="layer-badge" style="background:${group.color};">${group.layer}</span>` : ''}
        <span class="nav-group-title">${group.title}</span>
      </div>
      ${group.items.map(([label, r]) => `
        <a class="nav-link ${route === r ? 'active' : ''}" href="#${r}">
          <span class="nav-dot"></span>
          <span>${label}</span>
        </a>`).join('')}
    </div>`).join('');
}

export function renderOnThisPage(route) {
  const anchors = ANCHORS[route];
  if (!anchors || !anchors.length) return '';
  return `
    <div class="onpage-title">On this page</div>
    <div class="onpage-list">
      ${anchors.map(([id, label]) => `
        <a class="onpage-link" href="#${id}" data-anchor="${id}">${label}</a>`).join('')}
    </div>`;
}
