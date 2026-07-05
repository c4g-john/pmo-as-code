---
title: pmoascode.com rebuilt as a fully static site
date: "2026-07-05"
description: "The site is now a static Astro build: zero client JavaScript by default, llms.txt and the sitemap generated from the same records that render the pages."
---

This site was rebuilt from a hand-bundled single-page app into a fully
static build. Every page is real HTML at a real flat path, the one client
script only enhances (theme, menu, copy buttons, search), and primary
content needs no JavaScript at all.

The delivery layer practices what the standard preaches: page dates derive
from git history at build time, and
[llms.txt](/llms.txt), [llms-full.txt](/llms-full.txt), and the sitemap are
build outputs generated from the same records that render the navigation,
so none of them can drift from the pages they describe.

Every pre-rewrite URL still resolves, and
[PARITY.md](https://github.com/c4g-john/pmo-as-code/blob/main/PARITY.md)
records what happened to every factual claim in the migration: kept,
corrected, or retired. Four claims were corrected, including a page that
had shipped a visible rendering bug, and the record says which.
