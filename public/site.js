// Progressive enhancement only: every page reads fully without this file.
// One script, no framework: theme, mobile menu, copy buttons, the home-page
// audit replay, and the Pagefind search dialog.
(function () {
  'use strict';

  // ── theme ────────────────────────────────────────────────────────────────
  var glyph = document.getElementById('theme-glyph');
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    if (glyph) glyph.textContent = t === 'dark' ? '☾' : '☀';
    try { localStorage.setItem('theme', t); } catch (e) {}
  }
  var themeBtn = document.getElementById('theme-btn');
  if (themeBtn) {
    if (glyph) glyph.textContent =
      document.documentElement.getAttribute('data-theme') === 'dark' ? '☾' : '☀';
    themeBtn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
  }

  // ── mobile menu ──────────────────────────────────────────────────────────
  var menuBtn = document.getElementById('mobile-menu-btn');
  var sidebar = document.getElementById('sidebar');
  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
      sidebar.classList.toggle('mobile-open');
    });
    sidebar.addEventListener('click', function (e) {
      if (e.target.closest('a')) sidebar.classList.remove('mobile-open');
    });
  }

  // ── copy buttons ─────────────────────────────────────────────────────────
  var COPY = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  var CHECK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';

  function legacyCopy(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:absolute;left:-9999px;top:0;';
      document.body.appendChild(ta);
      ta.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) { return false; }
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { return true; })
        .catch(function () { return legacyCopy(text); });
    }
    return Promise.resolve(legacyCopy(text));
  }

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.dataset.copyId);
      if (!src) return;
      copyText(src.innerText).then(function (ok) {
        btn.classList.add(ok ? 'copied' : 'copy-failed');
        btn.innerHTML = ok ? CHECK : COPY;
        btn.title = ok ? 'Copied' : 'Copy failed — select manually';
        setTimeout(function () {
          btn.classList.remove('copied', 'copy-failed');
          btn.innerHTML = COPY;
          btn.title = 'Copy';
        }, 1800);
      });
    });
  });

  document.querySelectorAll('.copy-prompt-btn').forEach(function (btn) {
    var label = btn.dataset.label || btn.textContent;
    btn.addEventListener('click', function () {
      var src = document.getElementById(btn.dataset.copyId);
      if (!src) return;
      if (btn.dataset.open) window.open(btn.dataset.open, '_blank', 'noopener');
      copyText(src.innerText).then(function (ok) {
        btn.textContent = ok ? 'Copied ✓' : 'Copy failed — select manually';
        setTimeout(function () { btn.textContent = label; }, 2000);
      });
    });
  });

  // ── home-page audit replay ───────────────────────────────────────────────
  var rederive = document.getElementById('rederive-btn');
  var revealOut = document.getElementById('reveal-output');
  if (rederive && revealOut) {
    var passHtml = revealOut.innerHTML; // server-rendered truth is the source
    rederive.addEventListener('click', function () {
      revealOut.innerHTML =
        '<div style="display:flex;align-items:center;gap:11px;padding:6px 0 20px;">' +
        '<span class="spinner"></span>' +
        '<span class="mono" style="font-size:13px;color:var(--muted);">running checks<span class="blink">…</span></span></div>';
      clearTimeout(window._rd);
      window._rd = setTimeout(function () { revealOut.innerHTML = passHtml; }, 1100);
    });
  }

  // ── search (Pagefind, loaded on first open) ──────────────────────────────
  var dialog = document.getElementById('search-dialog');
  var searchBox = document.getElementById('search-box');
  var pagefindLoaded = false;

  function openSearch() {
    if (!dialog) return;
    dialog.showModal();
    if (!pagefindLoaded) {
      pagefindLoaded = true;
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/pagefind/pagefind-ui.css';
      document.head.appendChild(link);
      var s = document.createElement('script');
      s.src = '/pagefind/pagefind-ui.js';
      s.onload = function () {
        /* global PagefindUI */
        new PagefindUI({ element: '#pagefind-mount', showSubResults: true, showImages: false });
        focusSearch();
      };
      s.onerror = function () {
        document.getElementById('pagefind-mount').textContent =
          'Search index unavailable in this build.';
      };
      document.body.appendChild(s);
    } else {
      focusSearch();
    }
  }
  function focusSearch() {
    var input = dialog.querySelector('input');
    if (input) input.focus();
  }
  if (searchBox) searchBox.addEventListener('click', openSearch);
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape' && dialog && dialog.open) dialog.close();
  });
  if (dialog) dialog.addEventListener('click', function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
