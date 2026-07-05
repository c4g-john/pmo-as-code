---
title: "docassert 1.0: the stability promise is now binding"
date: "2026-07-04"
description: "The reference implementation reaches 1.0 on PyPI. STABILITY.md becomes a binding SemVer contract covering the CLI surface, JSON shapes, and exit codes."
---

[docassert 1.0.0 is on PyPI](https://pypi.org/project/docassert/). The
version number is the point: it makes
[STABILITY.md](https://github.com/c4g-john/docassert/blob/main/STABILITY.md)
a binding contract. The CLI surface, the JSON output shapes, the exit codes,
and the packaged-data semantics are now covered by SemVer, with a documented
deprecation process, so automation built on docassert 1.x has ground under
it.

The chartered target for a stable engine was the end of October 2026; it
shipped four months early, and the
[project page that tracked it](https://c4g-john.github.io/pmo-as-code-pmo/PRJ-002-ENG.html)
derived that state rather than announcing it.

1.0.0 implements spec v0.8.0 and verifies against its conformance suite.
Install with `pipx install docassert`, or start from the
[template](https://github.com/c4g-john/pmo-as-code-template).
