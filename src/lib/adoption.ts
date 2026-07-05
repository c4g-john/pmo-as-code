// Build-time adoption measurement. Counted, never estimated; every number
// names its source and the method's blind spots are stated on the page.
// Each source fails soft independently: an unreachable API renders as
// "unavailable this build" for that number only, never as a stale value.
export interface AdoptionCounts {
  measuredAt: string; // YYYY-MM-DD, the build date
  templateForks: number | null;
  docassertForks: number | null;
  docassertStars: number | null;
  pypiLastMonth: number | null;
}

async function getJson(url: string, headers: Record<string, string> = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': 'pmoascode-build', ...headers } });
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.json();
}

async function tryGet<T>(fn: () => Promise<T>): Promise<T | null> {
  try {
    return await fn();
  } catch (e) {
    console.warn(`adoption source unavailable this build: ${e}`);
    return null;
  }
}

export async function fetchAdoption(): Promise<AdoptionCounts> {
  const gh: Record<string, string> = process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {};
  const [template, engine, pypi] = await Promise.all([
    tryGet(() => getJson('https://api.github.com/repos/c4g-john/pmo-as-code-template', gh)),
    tryGet(() => getJson('https://api.github.com/repos/c4g-john/docassert', gh)),
    tryGet(() => getJson('https://pypistats.org/api/packages/docassert/recent')),
  ]);
  return {
    measuredAt: new Date().toISOString().slice(0, 10),
    templateForks: template ? template.forks_count : null,
    docassertForks: engine ? engine.forks_count : null,
    docassertStars: engine ? engine.stargazers_count : null,
    pypiLastMonth: pypi ? pypi.data.last_month : null,
  };
}
