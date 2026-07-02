#!/usr/bin/env python3
"""Regenerate the static SEO snapshots (run after editing js/pages/* or js/data.js).

    python3 scripts/prerender.py     # rewrites /<route>/index.html + home + sitemap.xml

Renders every SPA route locally via macOS JavaScriptCore (osascript -l JavaScript):
the page renderers are pure template-literal functions, so no browser or Node is
needed. Each snapshot gets a per-page <title>/canonical/og:url and a
<body data-route> that the SPA (js/state.js) hydrates in place.
"""
import re
import subprocess
import tempfile
from pathlib import Path

DOMAIN = "https://pmoascode.com"
ROOT = Path(__file__).resolve().parent.parent


def render_snapshots(outdir: Path) -> None:
    files = ["js/data.js", "js/state.js", "js/ui.js",
             *sorted((ROOT / "js/pages").glob("*.js")), "js/router.js"]
    parts = ["""ObjC.import('Foundation');
function writeFile(path, s){ $.NSString.alloc.initWithUTF8String(s).writeToFileAtomicallyEncodingError(path, true, 4, null); }
var location = { hash: "" }; var document = { body: { dataset: {} } }; var window = {};
"""]
    for f in files:
        src = (ROOT / f).read_text() if isinstance(f, str) else f.read_text()
        src = re.sub(r"^import .*$", "", src, flags=re.M)
        src = re.sub(r"^export ", "", src, flags=re.M)
        parts.append(src)
    parts.append(f"""ORDER.forEach(function(route){{
  var slug = route === "/" ? "__home" : route.slice(1).replace(/\//g, "__");
  writeFile("{outdir}/" + slug + ".html", getPageHtml(route));
}}); "done";""")
    bundle = outdir / "bundle.js"
    bundle.write_text("\n".join(parts))
    r = subprocess.run(["osascript", "-l", "JavaScript", str(bundle)],
                       capture_output=True, text=True)
    if r.returncode != 0:
        raise SystemExit(f"render failed: {r.stderr}")


def main() -> None:
    idx = ROOT / "index.html"
    shell_now = idx.read_text()
    shell = re.sub(r'<main id="content">.*?</main>',
                   '<main id="content"></main>', shell_now, flags=re.S)
    meta = dict(re.findall(r"'(/[^']*)':\s*{\s*t:\s*'([^']+)'",
                           (ROOT / "js/data.js").read_text()))

    with tempfile.TemporaryDirectory() as td:
        out = Path(td)
        render_snapshots(out)
        urls = [DOMAIN + "/"]
        for snap in sorted(out.glob("*.html")):
            slug = snap.stem
            route = "/" if slug == "__home" else "/" + slug.replace("__", "/")
            content = snap.read_text()
            if route == "/":
                idx.write_text(shell.replace('<main id="content"></main>',
                                             f'<main id="content">{content}</main>', 1))
                continue
            title = meta.get(route, "PMO as Code")
            url = f"{DOMAIN}{route}/"
            page = shell
            page = page.replace("<title>PMO as Code</title>",
                                f"<title>{title} · PMO as Code</title>", 1)
            page = page.replace('<meta property="og:title" content="PMO as Code">',
                                f'<meta property="og:title" content="{title} · PMO as Code">', 1)
            page = page.replace(f'<link rel="canonical" href="{DOMAIN}/">',
                                f'<link rel="canonical" href="{url}">', 1)
            page = page.replace(f'<meta property="og:url" content="{DOMAIN}/">',
                                f'<meta property="og:url" content="{url}">', 1)
            page = page.replace("<body>", f'<body data-route="{route}">', 1)
            page = page.replace('<main id="content"></main>',
                                f'<main id="content">{content}</main>', 1)
            dest = ROOT / route.lstrip("/") / "index.html"
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(page)
            urls.append(url)
            print("wrote", dest.relative_to(ROOT))

    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    sm += [f"  <url><loc>{u}</loc></url>" for u in sorted(urls)]
    sm.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(sm) + "\n")
    print(f"sitemap.xml: {len(urls)} urls")


if __name__ == "__main__":
    main()
