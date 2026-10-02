import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const ProjectRoutes = require('../project-routes.js');
const root = new URL('../', import.meta.url);
const read = name => readFileSync(new URL(name, root), 'utf8');
const source = read('collection.js');
const entries = JSON.parse(source.match(/const ENTRIES = (\[.*?\]);/s)[1]);
for (const [i, entry] of entries.entries()) {
  const slug = ProjectRoutes.slugForArtist(entry.artist);
  for (const suffix of ['', '/', '/index.html']) {
    assert.equal(ProjectRoutes.projectIndex(entries, `/${slug}${suffix}`), i);
    assert.equal(ProjectRoutes.projectIndex(entries, `/repo/${slug}${suffix}`, '/repo/'), i);
  }
  const html = read(`${slug}/index.html`);
  assert.ok(html.includes('<base href="../">'));
  assert.ok(html.includes('project-routes.js?v=artist-urls'));
  assert.ok(html.includes('collection.js?v=artist-urls'));
}
assert.equal(ProjectRoutes.projectIndex(entries, '/missing'), -1);
assert.equal(ProjectRoutes.slugForArtist('Tanaka Mapondera'), 'tanaka-mapondera');
assert.equal(ProjectRoutes.slugForArtist('Hamin Seo + Jeewoo Kang'), 'hamin-seo-jeewoo-kang');
const node = () => ({ classList: { add() {}, remove() {} }, style: {}, focus() {}, scrollTop: 0, querySelectorAll: () => [] });
const elements = new Map();
const document = {
  baseURI: 'https://additional-editions.com/', title: '',
  getElementById: id => { if (!elements.has(id)) elements.set(id, node()); return elements.get(id); },
  querySelectorAll: () => entries.map(node)
};
const location = { pathname: '/index/', reload() { throw new Error('Project navigation must not reload'); } };
const historyCalls = [];
const transitions = [];
const listeners = {};
const sandbox = {
  URL, ProjectRoutes, ENTRIES: entries, document, location,
  history: { pushState(_state, _title, url) { historyCalls.push(url.pathname); location.pathname = url.pathname; } },
  addEventListener(type, handler) { listeners[type] = handler; },
  setTimeout, Promise, setHover() {}, fillGallery() {}, setPortalLabel() {}, setActive() {},
  gal: node(), frame: node(), curEl: node(), tabEl: node(), aboutEl: node(), aboutScroll: node(),
  tween: async (key, value, duration) => transitions.push([key, value, duration]),
  wait: async () => {}, closeAbout() {}, leavePoster: async () => {},
};
vm.createContext(sandbox);
vm.runInContext('let mode="stack", sel=-1, aboutOpen=false, dirty=false; const pieces=ENTRIES.map(e=>({...e,target:0})); const V={};', sandbox);
const router = source.slice(source.indexOf('/* Update the address'), source.indexOf('function placeholder('));
const gallery = source.slice(source.indexOf('async function openGallery('), source.indexOf('/* ---------- saving images'));
vm.runInContext(router + gallery, sandbox);
const run = code => vm.runInContext(code, sandbox);
await run('openGallery(29)');
assert.equal(location.pathname, '/tanaka-mapondera');
assert.deepEqual(transitions.slice(0, 4), [['fill',1,320],['col',1,520],['jut',1,260],['savedVis',1,380]]);
await run('switchArtist(25)');
assert.equal(location.pathname, '/faith-kaufman');
assert.equal(run('sel'), 25);
assert.deepEqual(transitions.slice(-2), [['jut',0,160],['jut',1,200]]);
const pushes = historyCalls.length;
location.pathname = '/tanaka-mapondera/';
await listeners.popstate();
assert.equal(run('sel'), 29);
assert.equal(historyCalls.length, pushes, 'Back/Forward must not add history entries');
location.pathname = '/index/';
await listeners.popstate();
assert.equal(run('mode'), 'stack');
assert.equal(historyCalls.length, pushes);
location.pathname = '/hamin-seo-jeewoo-kang/';
await run('applyLocation()');
assert.equal(run('sel'), 24, 'Direct collaboration URL opens the matching project');
assert.equal(run('mode'), 'gallery');
assert.equal(historyCalls.length, pushes);
await run('closeGallery()');
assert.equal(location.pathname, '/index/');
assert.equal(run('mode'), 'stack');
console.log('PASS: 30 static routes, direct entry, artist switching, index return, Back/Forward, and existing transition timings.');
