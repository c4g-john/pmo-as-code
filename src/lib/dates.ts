// Build-time git dates. Each page's dateModified comes from the last commit
// that touched its source file, so the date is derived, never hand-typed.
// CI must check out full history (fetch-depth: 0) for this to be correct.
import { execSync } from 'node:child_process';

const cache = new Map<string, string>();

export function lastModified(srcPath: string): string {
  let d = cache.get(srcPath);
  if (d === undefined) {
    try {
      d = execSync(`git log -1 --format=%cs -- "${srcPath}"`, { encoding: 'utf-8' }).trim();
    } catch {
      d = '';
    }
    if (!d) d = new Date().toISOString().slice(0, 10); // not yet committed
    cache.set(srcPath, d);
  }
  return d;
}
