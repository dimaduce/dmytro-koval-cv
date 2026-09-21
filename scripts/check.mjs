import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile('public/index.html', 'utf8');
for (const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const url = m[1];
  if (/^(https?:|mailto:)/.test(url)) continue;
  assert((await stat('public/' + url.replace(/^\//, ''))).isFile(), url);
}
for (const id of ['experience', 'ai-practice', 'credentials', 'contact']) assert(html.includes(`id="${id}"`), id);
for (const name of ['Claude Code', 'ChatGPT', 'Grok Bot', 'Hermes', 'Bucha.social', 'Auspex UA LLC']) assert(html.includes(name), name);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert((await readFile('public/Dmytro-Koval-CV.pdf')).subarray(0, 5).toString() === '%PDF-');
console.log('All local assets, section anchors, required content and PDF exist.');
