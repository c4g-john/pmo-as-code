---
title: "docassert 1.0.3: publishing security maintenance"
date: "2026-11-14"
description: "A maintenance release updates the PyPI publishing pipeline without changing docassert behavior."
---

[docassert 1.0.3](https://github.com/c4g-john/docassert/releases/tag/v1.0.3)
is a release-infrastructure maintenance update. The PyPI publishing action
has been upgraded to v1.14.3 to address
[GHSA-5xjx-3w67-w9x9](https://github.com/pypa/gh-action-pypi-publish/security/advisories/GHSA-5xjx-3w67-w9x9),
which removes an untrusted certificate authority from its publishing dependencies.

This change is in the release pipeline, not an installed docassert dependency.
There are no changes to CLI behavior, validation rules, or packaged defaults.
The release continues to implement PMO as Code spec v0.8.1.

The [wheel and source distribution are available on PyPI](https://pypi.org/project/docassert/1.0.3/).
See the [changelog](https://github.com/c4g-john/docassert/blob/v1.0.3/CHANGELOG.md)
for the release record.
