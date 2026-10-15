import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFile(resolve(root, path), "utf8");

test("HTML aponta apenas para assets locais que existem", async () => {
  const html = await read("index.html");
  const refs = [...html.matchAll(/(?:src|href)="\.\/([^"]+)"/g)].map(match => match[1]);
  assert.ok(refs.includes("css/styles.css"));
  assert.ok(refs.includes("css/presentation.css"));
  assert.ok(refs.includes("js/app.js"));
  for (const ref of refs) {
    await access(resolve(root, ref), constants.R_OK);
  }
});

test("imports de módulos JavaScript apontam para arquivos locais existentes", async () => {
  for (const file of ["js/app.js", "js/accessibility.js", "data/scenarios.js"]) {
    const source = await read(file);
    const imports = [...source.matchAll(/from\s+["']([^"']+)["']/g)].map(match => match[1]);
    for (const specifier of imports) {
      assert.ok(specifier.startsWith("."), `${file}: import externo inesperado: ${specifier}`);
      await access(resolve(dirname(resolve(root, file)), specifier), constants.R_OK);
    }
  }
});

test("aplicação não introduz chamadas externas nem execução dinâmica", async () => {
  const files = ["index.html", "js/app.js", "js/accessibility.js", "data/scenarios.js"];
  for (const file of files) {
    const source = await read(file);
    assert.doesNotMatch(source, /\bfetch\s*\(|\bXMLHttpRequest\b|\beval\s*\(|\bnew\s+Function\s*\(/);
    assert.doesNotMatch(source, /sk-[A-Za-z0-9]{20,}/);
  }
});

test("workflow de publicação usa GitHub Pages e aguarda validação", async () => {
  const workflow = await read(".github/workflows/pages.yml");
  assert.match(workflow, /needs:\s*validate/);
  assert.match(workflow, /actions\/upload-pages-artifact@v3/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.match(workflow, /pages:\s*write/);
  assert.match(workflow, /id-token:\s*write/);
});
