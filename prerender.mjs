// Build-time prerendering: renders every route to a static HTML file so that
// titles, meta descriptions, canonicals, and JSON-LD are present in the initial
// HTML response (not just injected client-side). Routes are derived from
// public/sitemap.xml so the two never drift apart.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const abs = (...p) => path.join(__dirname, ...p);

const template = fs.readFileSync(abs('dist', 'index.html'), 'utf-8');
const { render } = await import('./dist-server/entry-server.js');

// Derive the route list from the sitemap (single source of truth).
const sitemap = fs.readFileSync(abs('public', 'sitemap.xml'), 'utf-8');
const routes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname
);
if (!routes.includes('/')) routes.unshift('/');

for (const url of routes) {
  const { html, head } = render(url);
  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);

  const outDir = url === '/' ? abs('dist') : abs('dist', url);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);
  console.log('prerendered', url);
}

console.log(`\n✓ prerendered ${routes.length} routes`);
