import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const source = readFileSync(new URL('../collection.js', import.meta.url), 'utf8');
const entries = JSON.parse(source.match(/const ENTRIES = (\[.*?\]);/s)[1]);
function section(start, end) { return source.slice(source.indexOf(start), source.indexOf(end, source.indexOf(start))); }
const drawn = [], navigation = [], events = {};
const sandbox = {
  ENTRIES: entries, Math, Map,
  cv: { style: {}, addEventListener(type, fn) { events[type] = fn; } },
  ctx: { setTransform() {}, fillRect() {} },
  mctx: { measureText: text => ({ width: text.length * 6 }) },
  mobileMQ: { matches: false }, S: { misalign: 0 },
  colW: () => 80, stackH: () => 900,
  clamp: (x, lo, hi) => Math.min(hi, Math.max(lo, x)),
  lerp: (a, b, t) => a + (b-a)*t, ease: t => t,
  layout: () => 900, paintBar() {}, placeOverlays() {},
  drawStack: (p, x, y, width) => drawn.push({ index: p.idx, width }),
  aboutEl: { style: { setProperty() {} } }, requestAnimationFrame() {},
  openGallery: index => navigation.push(['open',index]),
  switchArtist: index => navigation.push(['switch',index]),
};
vm.createContext(sandbox);
vm.runInContext(`let mode='gallery', sel=0, hover=-1, dirty=true, touchMoved=false;
const pieces=ENTRIES.map((e,idx)=>({...e,idx,h:30,y:idx*30,prog:0,target:0,peek:0,peekTarget:0,offset:0}));
const V={fill:1,fillT:1,col:1,jut:1,savedVis:0,poster:0};
const tweens=new Map(), saved=[], reduce=false, W=1200,H=900,DPR=1,SEP=0;`, sandbox);
vm.runInContext(section('function tabGeom(', 'const mobileMQ ='), sandbox);
vm.runInContext(section('function render(now)', '/* ---------- overlays'), sandbox);
vm.runInContext(section('function pieceAt(', 'function paintBar('), sandbox);
vm.runInContext(section('function setHover(', '/* ---------- about'), sandbox);
const run = code => vm.runInContext(code, sandbox);
events.pointermove({pointerType:'mouse',clientX:40,clientY:45});
assert.equal(run('hover'),1);
assert.equal(run('pieces[1].peekTarget'),1);
assert.equal(run('pieces[1].target'),0,'Gallery hover must not expand row heights');
assert.equal(run('sel'),0,'Hover must not change the selected project');
assert.equal(navigation.length,0,'Hover must not navigate');
run('render(0)');
assert.ok(drawn.find(p=>p.index===1).width>80,'Hovered row must slide right');
assert.ok(run('tabGeom(pieces[1]).w') >= entries[1].artist.length*6, 'Tab fits the artist name instead of a number');
assert.equal(run('pieceAt(81,45)'),1,'Extended hover strip remains interactive');
events.click({clientX:40,clientY:45});
assert.deepEqual(navigation,[['switch',1]],'Click keeps existing artist-switch action');
events.pointerleave({pointerType:'mouse'});
assert.equal(run('pieces[1].peekTarget'),0);
for(let i=0;i<20;i++) run(`render(${16*i})`);
assert.equal(run('pieces[1].peek'),0,'Row retracts when pointer leaves');
run('setHover(0)');
assert.equal(run('pieces[0].peekTarget'),0,'Selected row does not gain an extra preview');
console.log('PASS: artist-name tabs, horizontal hover slide, unchanged selection, click navigation, and pointer-leave retraction.');
