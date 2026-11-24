# Portfólio · Camila Félix dos Reis

Portfólio de engenharia e pesquisa aplicada: sistemas ciberfísicos, sistemas
embarcados, gêmeos digitais e mobilidade elétrica. HTML, CSS e JavaScript puro,
sem dependências de execução, backend ou etapa de build.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Conteúdo inicial em pt-BR, seções semânticas e componentes declarativos |
| `styles.css` | Tokens visuais, temas claro/escuro, responsividade e impressão |
| `translations.js` | Dicionário centralizado: pt-BR, en, de e zh-CN |
| `theme-init.js` | Tema antes da renderização, com preferência local ou do sistema |
| `script.js` | Idiomas, metadados, tema, menu, navegação e revelação do e-mail |
| `scripts/validate.mjs` | Validação de traduções, conteúdo inicial, arquivos e links |
| `scripts/og-card.html` | Fonte visual da imagem de compartilhamento, 1200 × 630 |
| `favicon.svg` | Identidade vetorial |
| `camila.webp` | Fotografia otimizada utilizada na página e na imagem social |
| `camila.jpeg` | Fotografia original |
| `og-card.png` | Imagem Open Graph e Twitter Card |
| `Camila_Felix_dos_Reis_CV.pdf` | Currículo original para download |

A página reúne Início, Sobre, Experiência, Pesquisa, Projetos de Engenharia,
Competências Técnicas, Formação e Reconhecimentos, e Contato. Os destinos
`#top`, `#about`, `#aas`, `#experience`, `#research`, `#projects`, `#stack`,
`#extras` e `#contact` permanecem disponíveis.

## Execução local

Na raiz do repositório:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Abra http://127.0.0.1:8080. Também é possível abrir `index.html` diretamente.
Os scripts são clássicos, sem imports ou fetch de conteúdo, mantendo esse uso.
As fontes Manrope e IBM Plex Mono vêm do Google Fonts e possuem fontes de
sistema como alternativa.

## Conteúdo e internacionalização

O HTML contém a versão inicial em português e permanece legível sem JavaScript.
Os textos traduzíveis usam `data-i18n`; nomes acessíveis usam
`data-i18n-aria-label`. O dicionário é centralizado em `translations.js`.

Ao editar, mantenha os quatro idiomas com as mesmas chaves e atualize o texto
inicial correspondente no HTML. O validador detecta traduções ausentes e
divergências entre o texto inicial e o dicionário em pt-BR.

O idioma pode ser selecionado na interface ou por `?lang=en`, `?lang=de` e
`?lang=zh-CN`. Português é o padrão. Um parâmetro válido na URL tem prioridade
sobre a preferência salva. Título, descrição, canonical, Open Graph, Twitter e
idioma do documento acompanham a seleção. Os links hreflang indicam as quatro
opções e x-default. Como a hospedagem é estática, crawlers que não executam
JavaScript recebem os metadados e o conteúdo inicial em português.

A identidade profissional em inglês e R&D @ UEA são preservados em todos os
idiomas. As opções de tradução do site não representam fluência pessoal.
O currículo baixável continua sendo o PDF existente, sem versões traduzidas.

Projetos usam artigos com estrutura comum e detalhes expansíveis nativos.
A representação AAS é conceitual e usa submodelos expansíveis. O e-mail é
revelado por botão e então se torna um link mailto funcional.

## Critérios de conteúdo

- Preservar os sete projetos anteriores e apresentar MachForce separadamente.
- Distinguir a iniciação científica de modelagem energética do desenvolvimento
  coletivo do protótipo MachForce, que permanece em andamento.
- Identificar a contribuição individual quando ela está documentada.
- Distinguir simulação computacional de validação experimental de um veículo.
- Incluir manuscritos, apresentações e publicações apenas com evidências e
  autorização adequadas à categoria.
- Utilizar os registros disponíveis e o currículo Lattes para a seção científica.
- Não incluir documentos internos, esquemáticos, firmware, parâmetros do veículo,
  endereços operacionais, credenciais ou material sem autorização.

## Validação

Node.js 20 ou superior para os comandos abaixo:

```bash
node --check script.js
node --check translations.js
node --check theme-init.js
node --check scripts/validate.mjs
npx --yes html-validate@9 index.html scripts/og-card.html
node scripts/validate.mjs
```

Para conferir apenas as referências locais e traduções, sem consultas externas:

```bash
node scripts/validate.mjs --offline
```

A CI em `.github/workflows/validate.yml` executa as verificações em pushes para
`main`, pull requests e acionamento manual. Links externos têm timeout;
404/410 são erros, restrições de acesso e falhas de rede são avisos.

A revisão visual deve cobrir desktop, tablet e celular, os dois temas e os quatro
idiomas. Conferir navegação por teclado, foco, menu móvel, detalhes AAS/projetos,
download do PDF, e-mail, persistência das preferências e redução de movimento.
Testes de navegador podem usar Playwright e axe fora do repositório, sem
dependências adicionais para o site. Verificações automatizadas complementam
a revisão manual e não representam certificação integral de acessibilidade.

Para atualizar `og-card.png`, abra `/scripts/og-card.html` no servidor local,
aguarde as fontes e capture a viewport de 1200 × 630 sem redimensionamento.

## Publicação e versão anterior

O ambiente de publicação permanece GitHub Pages, branch `main`, diretório raiz,
sem build. A publicação exige o fluxo de revisão e envio do repositório; esta
refatoração não executa deploy, commit ou push automaticamente.

A versão anterior com estética de terminal está preservada na tag local
`v1.0.0`, no commit `cd06823311a5a126e3e78b7e111ae5722706d065`. Para
inspecioná-la sem alterar a pasta de trabalho:

```bash
git show v1.0.0:index.html
```
