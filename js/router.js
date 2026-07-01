import { SHELLS } from './data.js';
import { pageNavHtml, provenanceFooter } from './ui.js';
import { renderHome } from './pages/home.js';
import { renderManifesto, renderAutomation, renderTraceability } from './pages/manifesto.js';
import { renderRosetta } from './pages/rosetta.js';
import { renderConcepts } from './pages/concepts.js';
import { renderWhy } from './pages/why.js';
import { renderQuickstart } from './pages/quickstart.js';
import { renderQuickstartClaude } from './pages/quickstart-claude.js';
import { renderGuides } from './pages/guides.js';
import { renderReference } from './pages/reference.js';
import { renderIntegrations } from './pages/integrations.js';
import { renderProfiles } from './pages/profiles.js';
import { renderAdoption } from './pages/adoption.js';
import { renderVs } from './pages/vs.js';
import { renderFAQ } from './pages/faq.js';

function renderShell(route) {
  const shell = SHELLS[route];
  if (!shell) return '';
  return `
    <div>
      <div class="eyebrow">${shell.eyebrow}</div>
      <h1 style="font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:clamp(30px,4vw,42px);line-height:1.06;letter-spacing:-.03em;margin:0 0 18px;text-wrap:balance;">${shell.title}</h1>
      <p style="font-size:18px;line-height:1.55;color:var(--ink-2);max-width:60ch;margin:0 0 34px;">${shell.lead}</p>
      <div class="shell-status">
        <span class="shell-warn-dot"></span>
        SPEC · content lands in the Claude Code build
      </div>
      <div class="outline-rail">
        ${shell.outline.map((label, i) => `
          <div class="outline-item">
            <span class="outline-dot"></span>
            <span class="outline-n">${String(i + 1).padStart(2, '0')}</span>
            <span class="outline-label">${label}</span>
          </div>`).join('')}
      </div>
      ${pageNavHtml(route)}
      ${provenanceFooter(route)}
    </div>`;
}

export function getPageHtml(route) {
  if (route === '/') return renderHome();
  if (route === '/manifesto') return renderManifesto();
  if (route === '/manifesto/automation') return renderAutomation();
  if (route === '/manifesto/traceability') return renderTraceability();
  if (route === '/rosetta') return renderRosetta();
  if (route === '/concepts') return renderConcepts();
  if (route === '/why') return renderWhy();
  if (route === '/quickstart') return renderQuickstart();
  if (route === '/quickstart-claude') return renderQuickstartClaude();
  if (route === '/guides') return renderGuides();
  if (route === '/reference') return renderReference();
  if (route === '/integrations') return renderIntegrations();
  if (route === '/profiles') return renderProfiles();
  if (route === '/adoption') return renderAdoption();
  if (route === '/vs') return renderVs();
  if (route === '/faq') return renderFAQ();
  if (SHELLS[route]) return renderShell(route);
  return `<div><div class="eyebrow">404</div><h1 class="h1">Page not found.</h1><a href="#/" style="color:var(--accent);">← Home</a></div>`;
}
