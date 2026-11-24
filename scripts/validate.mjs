import { readFileSync, existsSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const html = readFileSync('index.html', 'utf8');
const translations = readFileSync('translations.js', 'utf8');
const errors = [];
const warnings = [];
const locales = ['pt-BR', 'en', 'de', 'zh-CN'];
const dictionary = runInNewContext(translations + '\nI18N;', Object.create(null), { timeout: 1000 });
const expectedKeys = Object.keys(dictionary['pt-BR']);
const usedKeys = [...new Set([...html.matchAll(/data-i18n(?:-aria-label)?="([^"]+)"/g)].map(match => match[1]))];

for (const locale of locales) {
  const strings = dictionary[locale];
  if (!strings) {
    errors.push('Missing locale: ' + locale);
    continue;
  }
  for (const key of expectedKeys) {
    if (typeof strings[key] !== 'string' || !strings[key].trim()) errors.push(locale + ': missing translation for ' + key);
  }
  for (const key of Object.keys(strings)) {
    if (!expectedKeys.includes(key)) errors.push(locale + ': unexpected key ' + key);
  }
  for (const key of usedKeys) {
    if (!Object.hasOwn(strings, key)) errors.push(locale + ': missing HTML key ' + key);
  }
  if (!strings['meta.title'] || !strings['meta.description']) errors.push(locale + ': missing metadata');
}
for (const locale of Object.keys(dictionary)) {
  if (!locales.includes(locale)) errors.push('Unexpected locale: ' + locale);
}
const decode = value => value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&quot;/g, '"');
for (const match of html.matchAll(/<[^>]+\sdata-i18n="([^"]+)"[^>]*>([^<]*)<\/[^>]+>/g)) {
  if (decode(match[2]).trim() !== dictionary['pt-BR'][match[1]]) errors.push('Outdated Portuguese fallback: ' + match[1]);
}
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) errors.push('Duplicate HTML ids');
const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => decode(match[1]));
const external = new Set();
for (const reference of references) {
  if (reference.startsWith('#')) {
    if (reference !== '#' && !ids.includes(reference.slice(1))) errors.push('Missing anchor: ' + reference);
  } else if (/^https?:\/\//.test(reference)) {
    if (!reference.includes('fonts.g')) external.add(reference);
  } else if (!/^(data:|mailto:|tel:)/.test(reference)) {
    if (!existsSync(reference.split('?')[0])) errors.push('Missing local file: ' + reference);
  }
}
for (const locale of [...locales, 'x-default']) {
  if (!html.includes('hreflang="' + locale + '"')) errors.push('Missing hreflang: ' + locale);
}
for (const section of ['top', 'about', 'aas', 'experience', 'research', 'projects', 'stack', 'extras', 'contact']) {
  if (!ids.includes(section)) errors.push('Missing section: ' + section);
}
for (const key of ['vehicle', 'machforce', 'piscis', 'caica', 'energy', 'bridge', 'gds', 'pex']) {
  if (!ids.includes('project-' + key)) errors.push('Missing project: ' + key);
}
console.log('Translations: ' + locales.length + ' locales, ' + expectedKeys.length + ' keys each, ' + usedKeys.length + ' HTML keys');
console.log('References: ' + references.length + ', projects: 8');
if (!process.argv.includes('--offline')) {
  await Promise.all([...external].map(async url => {
    try {
      const request = method => fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(10000) });
      let response = await request('HEAD');
      if ([403, 405].includes(response.status)) {
        await response.body?.cancel();
        response = await request('GET');
      }
      const status = response.status;
      await response.body?.cancel();
      if ([404, 410].includes(status)) errors.push('Broken link (' + status + '): ' + url);
      else if (status >= 400) warnings.push('HTTP ' + status + ': ' + url);
    } catch (error) {
      warnings.push('External link unavailable: ' + url + ' (' + error.message + ')');
    }
  }));
}
warnings.forEach(message => console.log('WARNING ' + message));
errors.forEach(message => console.error('ERROR ' + message));
console.log(errors.length + ' error(s), ' + warnings.length + ' warning(s)');
process.exitCode = errors.length ? 1 : 0;
