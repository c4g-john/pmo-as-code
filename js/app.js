import { state } from './state.js';
import { REVEAL_PASS, REVEAL_COMPUTING } from './data.js';
import { renderSidebar, renderOnThisPage, scrollTo } from './ui.js';
import { getPageHtml } from './router.js';

const $sidebar = document.getElementById('sidebar');
const $content = document.getElementById('content');
const $onpage  = document.getElementById('on-this-page');
const $body    = document.querySelector('[data-theme]') || document.documentElement;
const $themeGlyph = document.getElementById('theme-glyph');

function setTheme(t) {
  state.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  $themeGlyph.textContent = t === 'dark' ? '☾' : '☀';
}

function render() {
  const { route } = state;
  $sidebar.innerHTML = renderSidebar(route);
  $content.innerHTML = getPageHtml(route);
  $onpage.innerHTML  = renderOnThisPage(route);

  // Wire rosetta rows
  if (route === '/rosetta') {
    document.querySelectorAll('.rosetta-summary').forEach(el => {
      el.addEventListener('click', () => {
        const i = el.dataset.row;
        const detail = document.getElementById(`detail-${i}`);
        const isOpen = detail.style.display !== 'none';
        detail.style.display = isOpen ? 'none' : 'grid';
        el.classList.toggle('open', !isOpen);
      });
    });
  }

  // Wire rederive button
  const rederiveBtn = document.getElementById('rederive-btn');
  if (rederiveBtn) {
    rederiveBtn.addEventListener('click', () => {
      state.revealed = false;
      document.getElementById('reveal-output').innerHTML = REVEAL_COMPUTING;
      clearTimeout(window._rd);
      window._rd = setTimeout(() => {
        state.revealed = true;
        document.getElementById('reveal-output').innerHTML = REVEAL_PASS;
      }, 1100);
    });
  }

  // Wire copy buttons
  const COPY_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  const CHECK_ICON = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;

  // Copy text with a legacy execCommand fallback for contexts where the
  // async Clipboard API is unavailable or permission-denied (e.g. non-HTTPS,
  // unfocused/embedded frames). Returns a promise resolving to true on success.
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(() => true).catch(() => legacyCopy(text));
    }
    return Promise.resolve(legacyCopy(text));
  }
  function legacyCopy(text) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:absolute;left:-9999px;top:0;';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = document.getElementById(btn.dataset.copyId);
      if (!pre) return;
      copyText(pre.innerText).then(ok => {
        btn.classList.add(ok ? 'copied' : 'copy-failed');
        btn.innerHTML = ok ? CHECK_ICON : COPY_ICON;
        btn.title = ok ? 'Copied' : 'Copy failed — select manually';
        setTimeout(() => {
          btn.classList.remove('copied', 'copy-failed');
          btn.innerHTML = COPY_ICON;
          btn.title = 'Copy';
        }, 1800);
      });
    });
  });

  // Wire FAQ accordion
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.faq;
      const answer = document.getElementById(`faq-answer-${i}`);
      const chevron = document.querySelector(`[data-faq-chevron="${i}"]`);
      const isOpen = answer.style.display !== 'none';
      answer.style.display = isOpen ? 'none' : 'block';
      if (chevron) chevron.textContent = isOpen ? '+' : '−';
    });
  });

  // Close mobile sidebar on nav click
  document.querySelectorAll('#sidebar a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('sidebar').classList.remove('mobile-open');
    });
  });

  window.scrollTo({ top: 0, behavior: 'auto' });
}

// ─── Events ───────────────────────────────────────────────────────────────────
window.addEventListener('hashchange', () => {
  state.route = location.hash.slice(1) || '/';
  state.revealed = false;
  render();
  setTimeout(() => {
    state.revealed = true;
    const out = document.getElementById('reveal-output');
    if (out && state.route === '/') {
      out.innerHTML = REVEAL_PASS;
    }
  }, 500);
});

document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('mobile-open');
});

document.getElementById('theme-btn').addEventListener('click', () => {
  setTheme(state.theme === 'dark' ? 'light' : 'dark');
});

document.getElementById('logo-link').addEventListener('click', e => {
  e.preventDefault();
  location.hash = '/';
});

// Anchor scroll
document.addEventListener('click', e => {
  const anchor = e.target.closest('[data-anchor]');
  if (anchor) {
    e.preventDefault();
    scrollTo(anchor.dataset.anchor);
  }
});

// ─── Boot ─────────────────────────────────────────────────────────────────────
setTheme('dark');
render();
setTimeout(() => {
  state.revealed = true;
  const out = document.getElementById('reveal-output');
  if (out && state.route === '/') {
    out.innerHTML = REVEAL_PASS;
  }
}, 600);
