/* Validacao estatica do portfolio: i18n, arquivos locais, ancoras e links externos. */
import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const js = readFileSync('script.js', 'utf8');
const erros = [];
const avisos = [];

/* ---------- i18n: paridade PT/EN e cobertura do HTML ---------- */
const bloco = js.match(/const I18N = (\{[\s\S]*?\n\});/);
if (!bloco) {
  erros.push('nao consegui localizar o objeto I18N em script.js');
} else {
  const I18N = eval('(' + bloco[1] + ')');
  const pt = Object.keys(I18N.pt);
  const en = Object.keys(I18N.en);
  const usadas = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]))];

  pt.filter(k => !en.includes(k)).forEach(k => erros.push(`chave sem traducao EN: ${k}`));
  en.filter(k => !pt.includes(k)).forEach(k => erros.push(`chave sem versao PT: ${k}`));
  usadas.filter(k => !pt.includes(k)).forEach(k => erros.push(`data-i18n sem entrada no dicionario: ${k}`));
  pt.filter(k => !usadas.includes(k)).forEach(k => avisos.push(`chave nunca usada no HTML: ${k}`));
  console.log(`i18n: ${pt.length} chaves PT, ${en.length} EN, ${usadas.length} data-i18n no HTML`);
}

/* ---------- referencias locais e ancoras ---------- */
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
const refs = [...html.matchAll(/(?:href|src|srcset)="([^"]+)"/g)].map(m => m[1]);
const externos = [];

for (const ref of refs) {
  if (ref.startsWith('#')) {
    if (ref !== '#' && !ids.has(ref.slice(1))) erros.push(`ancora sem destino: ${ref}`);
  } else if (/^https?:\/\//.test(ref)) {
    externos.push(ref);
  } else if (!/^(data:|mailto:|tel:)/.test(ref)) {
    if (!existsSync(ref.split('?')[0])) erros.push(`arquivo local ausente: ${ref}`);
  }
}
console.log(`refs: ${refs.length} no total, ${externos.length} externas`);

/* ---------- links externos ---------- */
const unicos = [...new Set(externos)].filter(u => !u.includes('fonts.g'));
const resultados = await Promise.all(unicos.map(async (url) => {
  try {
    let r = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    if (r.status === 405 || r.status === 403) r = await fetch(url, { method: 'GET', redirect: 'follow' });
    return { url, status: r.status };
  } catch (e) {
    return { url, status: 0, erro: e.message };
  }
}));

for (const { url, status, erro } of resultados) {
  if (status === 404 || status === 410) erros.push(`link quebrado (${status}): ${url}`);
  else if (status === 0) avisos.push(`nao consegui checar: ${url} (${erro})`);
  else if (status >= 400) avisos.push(`status ${status}: ${url}`);
}

/* ---------- relatorio ---------- */
avisos.forEach(a => console.log(`AVISO  ${a}`));
erros.forEach(e => console.log(`ERRO   ${e}`));
console.log(`\n${erros.length} erro(s), ${avisos.length} aviso(s)`);
process.exit(erros.length ? 1 : 0);
