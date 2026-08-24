# Portfólio · Camila Félix dos Reis

**Site publicado: [cawzkf.github.io](https://cawzkf.github.io)**

Portfólio pessoal com estética de terminal, tema escuro e bilíngue (PT/EN). Reúne
pesquisa e projetos em sistemas ciberfísicos, gêmeos digitais, AAS/OPC UA e IA em edge.

Sem build e sem dependências: `index.html`, `styles.css` e `script.js` servidos
diretamente pelo GitHub Pages.

## Stack do site
- HTML e CSS puro, sem framework
- JavaScript vanilla: boot sequence, efeito de digitação, i18n PT/EN, scroll reveal,
  árvore AAS interativa e revelação do e-mail por clique
- Fontes: JetBrains Mono e Space Grotesk (Google Fonts)

## Arquivos
| Arquivo | Papel |
|---|---|
| `index.html` | estrutura e conteúdo, com atributos `data-i18n` |
| `styles.css` | tokens de cor em `:root` e todo o layout |
| `script.js` | dicionário `I18N` (PT/EN) e as interações |
| `camila.webp` / `camila-640.jpg` | foto do hero, servida via `<picture>` |
| `camila.jpeg` | foto original em 1152x1536, fonte para gerar as versões servidas |
| `og-card.png` | cartão 1200x630 usado no Open Graph e no Twitter Card |
| `Camila_Felix_dos_Reis_CV.pdf` | currículo baixável pelo botão do hero |

## Rodar localmente
Abra o `index.html` no navegador, ou suba um servidor estático:

```bash
python3 -m http.server 8080   # http://localhost:8080
npx serve .                   # alternativa em Node
```

## Editar conteúdo
- **Textos PT/EN**: objeto `I18N` em `script.js`, pareado com os `data-i18n` do `index.html`.
  Toda string visível precisa existir nos dois idiomas.
- **Projetos**: blocos `<article class="project">` no `index.html`.
- **Cores**: variáveis CSS em `:root` no topo de `styles.css` (`--green`, `--bg` e afins).
- **Boot sequence**: array `bootLines` em `script.js`.

## Validação
O workflow em `.github/workflows/validate.yml` roda a cada push e verifica sintaxe do
JavaScript, paridade de chaves entre PT e EN, e links internos e externos quebrados.

## Publicação
GitHub Pages serve a branch `main` a partir da raiz, sem etapa de build.
Configuração em **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
