# Website Content Authoring Guidelines

Reference for building website content that serves human readers, search engines, and AI systems (answer engines and agents) in a single body of work. Applicable to any site. Drop this into a project as context for Claude Code.

Last reviewed: July 2026.

---

## Core principle

Build for the model and the human in the same motion. A page that is fast, cleanly structured, factually dense, and properly marked up earns a search ranking, an AI Overview slot, and a citation in an AI answer from one effort. Do not build a separate "AI version" of anything.

Keep two layers distinct:

- **Authoring layer** — how content is written and stored.
- **Delivery layer** — the HTML and markup that ship to the page.

Most format confusion (Markdown vs JSON vs XML) comes from collapsing these. They are different jobs.

---

## Authoring format

**Prose pages: Markdown (or MDX).**
Portable, diffs cleanly in version control, and read/written natively by AI tooling. Use MDX only when a page needs inline components. Default to plain Markdown otherwise.

**Repeatable content: structured data, not prose.**
Anything countable or listed (courses, events, team members, testimonials, FAQ entries, pricing tiers, product specs) lives as data: JSON, YAML frontmatter, or a headless CMS collection. One record then feeds the page, the sitemap, the structured markup, and any other surface. Never hand-write the same entity twice.

**Do not author prose as JSON or XML.** Those formats are for structured records that populate templates, not for narrative content.

Rule of thumb: if a human reads it as sentences, author it in Markdown. If a template renders it into a repeated card or list, author it as data.

---

## Writing for extraction

AI systems tokenize a page and lift the most relevant self-contained chunk. Write so any section can be quoted cleanly on its own.

- **Answer first (BLUF).** Lead with the direct answer, then the supporting detail. Do not bury the point under setup.
- **Short paragraphs.** Two to four sentences. Dense blocks are harder to chunk.
- **One idea per section.** A heading should introduce a self-contained unit that reads correctly out of context.
- **Headers carry the subject.** The H1 leads with what the page is; any statement follows a colon. An eyebrow or kicker is a structural breadcrumb, never the only place the subject appears, and a header is never a "Gotcha!" whose meaning depends on the body. Plain conjunctions over comma-pairings.
- **Be factually dense.** Concrete claims, numbers, dates, named entities. Vague copy gives a model nothing to ground on.
- **State facts in the visible text.** Models rely on what a human sees on the page, not on hidden markup. If a fact matters, it belongs in the body copy.
- **Q&A blocks where natural.** Clear question-and-answer pairs are the structure models quote most readily.

---

## Semantic HTML (the delivery layer that actually gets parsed)

This is the layer AI systems and search actually read. Controlled tests show major models strip structured data at runtime and rely on visible HTML content, and research (HtmlRAG) indicates clean semantic HTML preserves structure that plain text loses. Get this right before anything below it.

- Correct heading hierarchy. Never skip levels (`h1` to `h2` to `h3`). One `h1` per page.
- Real structural tags: `<article>`, `<section>`, `<nav>`, `<aside>`, `<main>`. Not a wall of `<div>`.
- Make headings linkable with stable `id` anchors so specific sections can be referenced.
- Main content must be present in the initial server-rendered HTML, not injected only after JavaScript. If a model fetches the page and the content isn't there, it does not exist.
- Never bake text into images. If an image carries information (a chart, an infographic), describe it in alt text or an adjacent caption.
- Return a clean `200`, no `noindex` on pages you want seen, no login/cookie/geo wall in front of primary content.

---

## Structured data (JSON-LD)

Add JSON-LD for the entities that define the site. Treat it as entity infrastructure that helps machines confirm what a page is and how entities connect, not as a direct citation lever.

**Honest framing:** evidence that adding schema directly drives AI citations is weak. A causal study of ~1,885 pages found no significant short-term citation uplift, and multiple AI systems strip JSON-LD at runtime. The durable value is longer-term: schema feeds knowledge graphs and canonical entity stores that models inherit from. So do it cleanly on pages that matter, and do not expect a same-week traffic effect.

Rules:

- Use **JSON-LD** in a `<script type="application/ld+json">` block in the document head. This is the format Google recommends and the one crawlers parse most reliably, including those that don't execute JavaScript.
- Match markup to page type: `Organization` (or `LocalBusiness`), `Person` for author bios, `Course`, `Article`/`BlogPosting`, `Product`, `FAQPage`, `Event`.
- **Structured data must match visible on-page content.** Do not mark up facts a human can't see on the page. Mismatched or stuffed schema is an abuse pattern.
- `FAQPage` and `HowTo` no longer earn rich-result decorations in Google, but remain valid schema types worth keeping. They package content as clean Q&A and step pairs, which is exactly what models prefer to quote.
- Include `datePublished` and `dateModified`. Freshness signals matter.
- Generate JSON-LD from the same structured records that render the page, so the two never drift apart.
- Validate every block (schema.org validator / Google Rich Results Test). A malformed block gets ignored or misread.

Minimal example:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Clear, specific page title",
  "description": "One-sentence summary of what this page covers.",
  "datePublished": "2026-07-05T08:00:00Z",
  "dateModified": "2026-07-05T08:00:00Z",
  "author": { "@type": "Person", "name": "Author Name" },
  "publisher": { "@type": "Organization", "name": "Site Name" }
}
</script>
```

---

## llms.txt

A Markdown summary of the site served at the root (`/llms.txt`), with an optional fuller `/llms-full.txt`.

**Honest framing:** as of early 2026, no major provider (OpenAI, Anthropic, Google) has confirmed they read llms.txt during crawling, and server logs show AI crawlers largely do not request it. The standard is still aspirational. Its real payoff is human-initiated: when someone pastes a site URL into an AI tool and the tool follows links, a clean token-efficient summary is what it finds. Cheap to add, low risk, worth doing, but not a ranking or citation strategy.

Format (Markdown, specific structure):

```markdown
# Site or Product Name

> One-paragraph summary of what this is and who it is for. Put the
> highest-value orientation here.

Optional context paragraph.

## Key pages
- [Page title](https://example.com/page): what it covers
- [Page title](https://example.com/page): what it covers

## Docs / resources
- [Resource](https://example.com/resource): what it covers
```

Keep `llms-full.txt` under ~100k tokens. Only write one if the content model is clean enough to summarize honestly; a stale summary is worse than none.

---

## Crawler access

Getting parsed is worthless if the crawlers are blocked.

- Review `robots.txt` and any CDN/WAF bot rules. Do not accidentally block the agents you want.
- Know the difference between **training bots** and **search/answer bots**, and set policy deliberately. Common agents: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`, `Googlebot`, `Google-Extended`.
- Keep an XML sitemap current and reference it in `robots.txt`.
- Watch access logs for the agents above to see what is actually being fetched.

Note on emerging directives: Cloudflare's `Content-Signal` (separates crawl / train / AI-answer permissions) is not part of RFC 9309, so strict validators flag it as unknown. That is a warning, not a failure, since compliant crawlers ignore lines they don't recognize.

---

## Performance and freshness

- Meet Core Web Vitals. Speed is a ranking and extraction factor.
- Server-render primary content. See semantic HTML above.
- Keep content current. Systems favor recently updated pages, and update timestamps in both visible copy and `dateModified` help. Broadcast changes via sitemap and feeds.

---

## Accessibility (doubles as machine legibility)

The same practices that help assistive tech help AI parsing.

- Alt text on informative images, describing the data or content, not "image."
- ARIA labels on complex interactive elements.
- Descriptive link text ("View the course syllabus", not "click here").

---

## Anti-patterns and things that do not work

- **Dedicated "AI info" pages** labeled for assistants. No evidence any system treats them differently from a normal well-structured page. A clean `llms.txt` plus good Markdown already covers this.
- **Schema stuffing** or FAQ markup that does not match visible content. This is the abuse pattern that got FAQ rich results narrowed.
- **Content that only exists after JS execution.** Frequently missed entirely.
- **Text baked into images** with no textual equivalent.
- **Betting on a single format as magic.** Not JSON-LD, not llms.txt, not OKF. Each is a supporting signal on top of strong, visible, well-structured content. Standard web mechanics (semantic HTML, clean Markdown, correct robots.txt, a sitemap) solve most of the problem.

---

## Emerging, worth watching (do not depend on yet)

- **Open Knowledge Format (OKF)** — Google's Markdown bundle format for handing agents your pages as a cross-linked graph, introduced June 2026 at v0.1. Nothing crawls for these bundles yet, and it was built for data teams, not sites. The near-term payoff is a clean machine-legible copy of your content plus a structural audit, not traffic.
- Agent protocols generally (A2A, Web Bot Auth, Content Signals) are moving fast and early. The specifics will shift; the shape of the work (clean, structured, visible content) will not.

---

## Build checklist

Per page:

- [ ] Prose authored in Markdown; repeatable content authored as structured data
- [ ] Answer-first, short paragraphs, one idea per section
- [ ] One `h1`, no skipped heading levels, linkable section anchors
- [ ] Semantic tags (`article`, `section`, `main`), not div soup
- [ ] Primary content in server-rendered HTML
- [ ] No informative text trapped in images; alt text present
- [ ] JSON-LD in head, matched to page type, matches visible content, validated
- [ ] `datePublished` / `dateModified` set

Per site:

- [ ] `robots.txt` reviewed; intended AI crawlers allowed; training vs search policy set deliberately
- [ ] Current XML sitemap, referenced in `robots.txt`
- [ ] `/llms.txt` present and honest
- [ ] Core Web Vitals passing
- [ ] Access logs monitored for AI crawler activity
