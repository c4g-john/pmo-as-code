---
title: "C4G Enterprises releases PMO as Code, an open standard that makes project status a build artifact"
date: "2026-07-05"
description: "The launch press release: reference implementation docassert reaches stable 1.0, and the standard runs its own development in public, where every claim can be checked."
---

FOR IMMEDIATE RELEASE

*Reference implementation docassert reaches stable 1.0; the standard runs
its own development in public, where every claim can be checked.*

CLIFTON, Va., July 5, 2026 — C4G Enterprises Inc. today announced the
public launch of PMO as Code, an open, vendor-neutral standard for running
a project management office from version-controlled files. Its reference
implementation, docassert, reached a stability-guaranteed 1.0 release on
July 4, 2026 and is available now under the Apache 2.0 license.

Today's PMO runs on slide decks, spreadsheets, and approval emails: status
is self-reported, artifacts are stale on arrival, and no one can audit who
approved what. PMO as Code applies the engineering playbook instead.
Business documents such as charters, requirements, and risk registers live
in Git as structured Markdown, every change is tested and gated before it
merges, and red, amber, or green is compiled from the documents themselves.
There is no field where anyone types a status.

The standard governs its own development in public. Three live deployments
derive their dashboards from documents on every change, including
[the portfolio that builds PMO as Code itself](https://c4g-john.github.io/pmo-as-code-pmo/),
and the project publishes a measured adopter count from day zero, zeros
included. In a recorded test, a newcomer's fresh copy of the starter
template reached a fully gated, merged change and a live dashboard in about
seven minutes using only the README.

"In engineering, the truth lives in the source. Nobody asks a deployment
how it feels about the way things are going," said John Tanner, founder of
C4G Enterprises and creator of PMO as Code. "The automated discipline I
spent twenty years helping install always stopped just outside the PMO's
door. This is the answer to that. When an automation flags a project amber,
the dashboard says amber, and nobody gets to change it for a slide deck."

docassert installs with `pipx install docassert` or via Homebrew; a
[starter template](https://github.com/c4g-john/pmo-as-code-template)
produces a working, gated repository in minutes. The standard is published
as a [versioned specification](https://pmoascode.com/standard/) with a
73-case conformance suite, so alternative implementations can prove the
same claim. The specification is currently v0.8 and marked draft while it
hardens toward its own 1.0.

Everything is free and open source at [pmoascode.com](https://pmoascode.com),
with release-tied news at [pmoascode.com/news](https://pmoascode.com/news/).

## About PMO as Code

PMO as Code is an open, vendor-neutral standard for running a project
management office from version-controlled files. Business documents live in
Git as structured Markdown, every change is tested and gated before it
merges, and project status is compiled from the documents rather than
reported by hand. The standard, its specification, and its reference
implementation are Apache-2.0 and free to adopt at pmoascode.com.

## About docassert

docassert is the reference implementation of PMO as Code: a command-line
tool that validates business documents the way a test suite validates code.
It reached a stability-guaranteed 1.0 in July 2026, is installable from
PyPI, and ships the schemas, audit criteria, templates, and delivery
profiles of the standard. Details at docassert.com.

## About the author

PMO as Code was created by John Tanner, founder of C4G Enterprises Inc. His
career spans kicking off a DevOps movement at the White House
Communications Agency, development-practice consulting for Fortune 500
companies worldwide, delivery modernization at Freddie Mac, and leading the
PMO at a Fortune 200 company. He publishes the standard and its tooling as
open source.

Media contact: press@c4genterprises.com
