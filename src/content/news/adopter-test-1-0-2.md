---
title: "The first-hour test caught a bug; the fix is docassert 1.0.2"
date: "2026-07-05"
description: "A fresh template copy reached a green gate and a live dashboard in about seven minutes, README only, and surfaced a real scaffold bug on its first command."
---

The starter template's promise, that a fresh copy reaches a green gate and
a live dashboard using only the README, was exercised end to end today.
The run is public:
[the repository](https://github.com/c4g-john/template-adoption-2026-07),
[the gated pull request](https://github.com/c4g-john/template-adoption-2026-07/pull/1)
with its checks, and
[the live dashboard](https://c4g-john.github.io/template-adoption-2026-07/)
it produced. Repository creation to merged, gate-checked pull request took
about seven minutes.

The first command also surfaced a real bug: a freshly scaffolded project
anchor failed its own validation, because the packaged template's required
sections held only comments, and the structural check correctly refuses to
count comments as content.
[docassert 1.0.2](https://github.com/c4g-john/docassert/blob/main/CHANGELOG.md)
shipped the fix the same day, with a regression test that runs the README's
exact command sequence, so the first hour stays tested from here on.

Finding it this way is the method working as designed: the adopter
experience is a chartered requirement with a test, and the test failed
honestly before any adopter had to.
