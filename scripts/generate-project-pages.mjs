import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const require = createRequire(import.meta.url);
const { slugForArtist } = require('../project-routes.js');
const source = readFileSync(path.join(root, 'collection.js'), 'utf8');
const entries = JSON.parse(source.match(/const ENTRIES = (\[.*?\]);/s)[1]);
const template = readFileSync(path.join(root, 'index/index.html'), 'utf8');
const escape = text => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugs = new Set();
for (const entry of entries) {
  const slug = slugForArtist(entry.artist);
  if (!slug || slugs.has(slug)) throw new Error(`Artist URL collision: ${slug}`);
  slugs.add(slug);
  const directory = path.join(root, slug);
  if (existsSync(directory) && !existsSync(path.join(directory, 'index.html'))) throw new Error(`Existing directory: ${slug}`);
  mkdirSync(directory, { recursive: true });
  const page = template.replace('<title>Additional Editions</title>', `<title>${escape(entry.artist)} — ${escape(entry.title)} — Additional Editions</title>`);
  writeFileSync(path.join(directory, 'index.html'), page);
}
console.log(`Generated ${slugs.size} direct project URLs.`);
