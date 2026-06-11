# Portfólio — Camila Felix dos Reis

Portfólio pessoal com estética terminal/console, dark, bilíngue (PT/EN).
Sem build, sem dependências — apenas `index.html`, `styles.css` e `script.js`.

## Stack do site
- HTML + CSS puro (sem framework)
- JavaScript vanilla (boot sequence, efeito de digitação, i18n PT/EN, scroll reveal)
- Fontes: JetBrains Mono + Space Grotesk (Google Fonts)

## Rodar localmente
Abra o `index.html` direto no navegador, ou suba um servidor estático:

```bash
# Python
python3 -m http.server 8080
# depois abra http://localhost:8080

# ou Node
npx serve .
```

## Publicar no GitHub Pages
1. Crie um repositório (ex.: `cawzkf.github.io` para virar a raiz do seu domínio,
   ou qualquer nome, ex.: `portfolio`).
2. Suba os arquivos:

```bash
cd portfolio
git init
git add .
git commit -m "portfolio: site inicial"
git branch -M main
git remote add origin https://github.com/cawzkf/cawzkf.github.io.git
git push -u origin main
```

3. No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   selecione `main` / `root` e salve.
4. Em ~1 min o site fica em:
   - `https://cawzkf.github.io` (se o repo for `cawzkf.github.io`)
   - `https://cawzkf.github.io/portfolio` (se o repo tiver outro nome)

## Editar conteúdo
- **Textos PT/EN**: ficam no objeto `I18N` em `script.js` e nos atributos `data-i18n` do `index.html`.
- **Projetos**: blocos `<article class="project">` no `index.html`.
- **Cores**: variáveis CSS em `:root` no topo de `styles.css` (`--green`, `--bg`, etc).
- **Boot sequence**: array `bootLines` em `script.js`.
