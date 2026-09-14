const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, "Duplicate HTML ids");
for (const [, url] of html.matchAll(/(?:src|href|poster)="([^"]+)"/g)) {
  if (url.startsWith("#")) assert(ids.includes(url.slice(1)), "Missing anchor " + url);
  else if (!/^https?:/.test(url)) assert(fs.existsSync(path.join(root, url.split("?")[0])), "Missing asset " + url);
}
assert.equal((html.match(/data-lightbox/g) || []).length, 10, "Preserve all ten artwork images");
assert(!html.includes("three-scene.js"), "No background WebGL dependency");
assert(!html.includes("<iframe"), "Do not load or run the game before user intent");

// Exercise the game lifecycle and image dialog without a network or browser engine.
class Element {
  constructor() {
    this.events = {}; this.children = []; this.hidden = false;
    this.classList = { add() {}, remove() {} };
  }
  addEventListener(name, callback) { this.events[name] = callback; }
  append(child) { this.children.push(child); child.parent = this; }
  remove() { this.parent.children = this.parent.children.filter(child => child !== this); }
  focus() { this.focused = true; }
  removeAttribute(name) { delete this[name]; }
  querySelector() { return { alt: "Test artwork" }; }
  showModal() { this.open = true; }
  close() { this.open = false; this.events.close(); }
}
const selectors = ["#lightbox", "#lightbox-image", "#lightbox-caption", "#start-game", "#stop-game", "#game-shell", "#game-placeholder", "#game-status"];
const nodes = Object.fromEntries(selectors.map(selector => [selector, new Element()]));
const artwork = new Element();
artwork.href = "https://example.test/art.png";
nodes["#start-game"].href = "https://example.test/portfolio/game/index.html";
nodes["#stop-game"].hidden = true;
const timers = new Set();
const document = {
  body: new Element(),
  querySelector: selector => nodes[selector],
  querySelectorAll: () => [artwork],
  createElement: () => new Element()
};
vm.runInNewContext(fs.readFileSync(path.join(root, "script.js"), "utf8"), {
  document,
  setTimeout: callback => { timers.add(callback); return callback; },
  clearTimeout: callback => timers.delete(callback)
});
const click = { button: 0, preventDefault() {} };
const start = nodes["#start-game"], stop = nodes["#stop-game"], shell = nodes["#game-shell"];
start.events.click({ ...click, ctrlKey: true });
assert.equal(shell.children.length, 0, "Modified clicks retain native link behaviour");
start.events.click(click);
start.events.click(click);
assert.equal(shell.children.length, 1, "Only one game instance");
assert.equal(shell.children[0].src, start.href, "Preserve nested project URL");
assert.equal(stop.hidden, false);
shell.children[0].events.load();
assert.equal(timers.size, 0, "Clear loading timeout");
stop.events.click();
assert.equal(shell.children.length, 0, "Stopping removes the runtime and sound");
assert.equal(nodes["#game-placeholder"].hidden, false);
assert(start.focused, "Restore keyboard focus");
start.events.click(click);
stop.events.click();
assert.equal(timers.size, 0, "Stopping during load cancels timeout");
artwork.events.click(click);
assert.equal(nodes["#lightbox"].open, true);
assert.equal(nodes["#lightbox-image"].alt, "Test artwork");
nodes["#lightbox"].close();
assert(artwork.focused, "Return focus after closing preview");
console.log("PASS: local assets, anchors, artwork preservation, game lifecycle and dialog focus.");
