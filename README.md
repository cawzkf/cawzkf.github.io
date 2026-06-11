# Portfólio — Camila Félix dos Reis

Site pessoal com estética **terminal / Windows Terminal + Powerlevel10k**, dark, bilíngue (PT/EN).
Engenheira de Software · Sistemas Ciberfísicos · Gêmeos Digitais · AAS/OPC UA.

🔗 **No ar:** https://cawzkf.github.io

## Destaques
- Boot sequence + prompt `~ ❯` com relógio ao vivo
- **Você como um AAS** — árvore interativa de submodelos (Asset Administration Shell)
- Timeline de experiência, projetos, stack, certificações e idiomas
- Paleta idêntica ao terminal (Color Scheme 17), bilíngue PT/EN
- Página 404 temática, preview social (Open Graph) e os gatinhos pretos 🐈‍⬛

## Estrutura
```
index.html    estrutura + conteúdo
styles.css    tema terminal dark
script.js     boot, i18n PT/EN, AAS, scroll-spy, relógio, etc.
cv.html       currículo (versão imprimível)
404.html      página de erro temática
camila.jpeg   foto
```

## Rodar localmente
```bash
python3 -m http.server 8080   # abra http://localhost:8080
```

## Atualizar o site (deploy)
O SSH já está configurado, então é só commitar e dar push:
```bash
git add -A
git commit -m "sua mudança"
git push
```
Em ~1 min o GitHub Pages atualiza sozinho (repositório `cawzkf.github.io` publica do branch `main`).

## Editar conteúdo
- **Textos PT/EN:** objeto `I18N` em `script.js` + atributos `data-i18n` no HTML
- **Projetos:** blocos `<article class="project">` no `index.html`
- **Cores:** variáveis CSS em `:root` no topo de `styles.css`

---
Contato: [LinkedIn](https://www.linkedin.com/in/camila-felix-dos-reis) · [GitHub](https://github.com/cawzkf) · [Lattes](http://lattes.cnpq.br/4899528348009614)
