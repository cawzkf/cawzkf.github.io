/* ===================================================================
   Camila Felix dos Reis — Portfolio · interactions
   =================================================================== */

/* ---------- i18n strings ---------- */
const I18N = {
  pt: {
    'nav.about': 'sobre', 'nav.aas': 'aas', 'nav.experience': 'experiência', 'nav.research': 'pesquisa', 'nav.projects': 'projetos',
    'nav.stack': 'stack', 'nav.contact': 'contato',
    'aas.title': 'eu como um ativo · AAS', 'aas.online': 'online',
    'aas.hint': '// clique nos submodelos para expandir',
    'aas.role': '"Engenheira de Software · CPS"',
    'aas.langs': '"PT (nativo) · EN (profissional) · ES (básico) · DE (iniciante)"',
    'aas.refs': '→ referências',
    'aas.status': '"pesquisando"', 'aas.avail': '"aberta a pesquisa e colaboração"',
    'exp.title': 'experiência', 'exp.sub': '$ git log --author="Camila" --oneline',
    'exp.machforce.r': 'Líder Técnica (Hardware & Software)',
    'exp.machforce.d': 'Lidero as equipes de hardware e software de uma equipe estudantil que compete na Shell Eco-marathon. Defino a arquitetura geral e a integração entre aquisição embarcada e backend, conduzindo todo o pipeline de telemetria: da leitura dos sensores no veículo ao processamento, validação e análise energética em tempo real, com persistência de séries temporais e dashboards para decisão estratégica durante a corrida.',
    'exp.uea.r': 'Engenharia de Software · P&D',
    'exp.uea.d': 'Cyberlabs, Centro de Desenvolvimento de Sistemas Ciberfísicos da UEA. Engenharia de software, drivers e integrações que conectam o hardware ao software em ambientes reais: representação digital de ativos físicos, arquiteturas offline-first e integração via OPC UA / AAS e MQTT. Iniciei como voluntária e segui para a equipe de engenharia de software.',
    'exp.totvs.r': 'Analista de Suporte Técnico',
    'exp.totvs.d': 'Extração e manipulação de dados para relatórios gerenciais; criação e automação de relatórios SQL (CTEs, INSERT, UPDATE); validação e análise de informações para garantir precisão e integridade dos processos; otimização de processos internos e suporte técnico à equipe.',
    'extras.title': 'reconhecimentos & idiomas', 'extras.honors': 'prêmios', 'extras.honor1': '2º lugar na Feira de Engenharia da FMM',
    'extras.comp': 'competências-chave', 'extras.asset': 'Gestão de ativos',
    'extras.certs': 'certificações',
    'extras.c1': 'Fundamentos da Indústria 4.0 — RAMI 4.0 & AAS',
    'extras.c2': 'Introdução à IA: uma Abordagem Prática',
    'extras.c3': 'Containers & Docker (Fundamentos + Avançado)',
    'extras.c4': 'Desenvolvimento em C# / .NET (APIs REST)',
    'extras.c5': 'IA com Orange e Python',
    'extras.langs': 'idiomas', 'extras.pt': 'Português', 'extras.ptlvl': 'nativo',
    'extras.en': 'Inglês', 'extras.enlvl': 'profissional', 'extras.es': 'Espanhol', 'extras.eslvl': 'básico', 'extras.de': 'Alemão', 'extras.delvl': 'iniciante',
    'hero.role': 'Engenharia de Computação · Digital Twin & CPS · Embedded/Backend · Tech Lead @ Mach Force · P&D @ UEA',
    'hero.desc': 'Projeto arquiteturas para integração físico-digital: gêmeos digitais, representação semântica de ativos industriais (AAS/OPC UA) e inteligência computacional em ambientes com restrição de infraestrutura.',
    'hero.cta1': 'ver projetos →', 'hero.cta2': 'currículo lattes', 'hero.cta3': 'baixar cv (pdf)',
    'about.title': 'sobre',
    'about.p1': 'Sou estudante de Engenharia de Computação na Faculdade Matias Machline (FMM), em Manaus. Minha pesquisa concentra-se em <strong>arquiteturas de sistemas ciberfísicos distribuídos</strong>, com ênfase em representação semântica de ativos industriais e processamento local (edge) em ambientes com conectividade limitada.',
    'about.p2': 'Investigo como integrar o mundo físico e o digital de forma escalável e interoperável, avaliando desempenho arquitetural, padrões da Indústria 4.0 e suporte à decisão baseado em IA. Uso simulação veicular e sistemas inteligentes de aquicultura como estudos de caso para validação experimental.',
    'about.focus': 'CPS · Digital Twins · Edge AI',
    'json.role': '"Engenheira de Software · CPS"', 'json.status': '"pesquisando"',
    'research.title': 'áreas de pesquisa',
    'research.1.t': 'Sistemas Ciberfísicos', 'research.1.d': 'Arquiteturas offline-first integrando camada física de sensoriamento, comunicação e representação semântica do ativo.',
    'research.2.t': 'Gêmeos Digitais', 'research.2.d': 'Modelagem físico-digital estruturada segundo RAMI 4.0, com sincronização de estado em tempo real e estimativa energética.',
    'research.3.t': 'Semântica Industrial', 'research.3.d': 'Representação de ativos via Asset Administration Shell (AAS) e OPC UA para interoperabilidade entre sistemas.',
    'research.4.t': 'IA em Edge', 'research.4.d': 'Modelos preditivos leves (Random Forest, busca heurística) para suporte à decisão local em infraestrutura restrita.',
    'projects.title': 'projetos', 'projects.sub': '$ ls ~/projetos --sort=relevance',
    'proj.wip': 'em andamento', 'proj.done': 'concluído', 'proj.award': '2º lugar · Feira de Eng.',
    'proj.energy.d': 'Sistema embarcado de monitoramento de consumo de energia em tempo real: aquisição com ESP8266, persistência na nuvem (Firebase) e visualização em app Android. Premiado com 2º lugar na Feira de Engenharia da FMM.',
    'proj.carla.d': 'Protótipo de gêmeo digital energético veicular estruturado por RAMI 4.0. Integra modelo dinâmico longitudinal e modelo de bateria para estimar consumo e regeneração em tempo real no simulador CARLA. Arquitetura em camadas (Integração, Funcional, Informação, Comunicação) com AAS sincronizada via Eclipse BaSyx, publicação MQTT e servidor OPC UA. Validado por 89 testes unitários e verificação analítica com erro nulo. Latência medida do caminho raw para processed em 248 amostras: 5,7 ms de média e 9,3 ms no p95, sobre passo de simulação de 100 ms.',
    'proj.aqua.d': 'Piscis: arquitetura de sistema ciberfísico offline-first para aquicultura: sensoriamento embarcado (ESP32 + sensores de qualidade da água), comunicação MQTT e representação semântica via OPC UA. Inclui modelos preditivos locais (Random Forest) e busca heurística por Algoritmo Genético para apoio ao manejo alimentar. Avalia desempenho, latência e comportamento em conectividade limitada. Open source.',
    'proj.caica.d': 'App móvel para identificação automatizada de plantas medicinais indígenas. Arquitetura distribuída com visão computacional em nuvem (AWS S3, Lambda, Rekognition) e banco etnobotânico, evoluindo para arquitetura híbrida com inferência local e operação offline. Foco em democratizar o acesso ao conhecimento tradicional.',
    'proj.uamqtt.d': 'Ponte de comunicação industrial integrando os protocolos OPC UA e MQTT, permitindo interoperabilidade entre o chão de fábrica e camadas de informação/nuvem.',
    'proj.gds.d': 'Prova de conceito de Global Discovery Server OPC UA com node-opcua e open62541, incluindo gateway-api e simulador AAS, base para gestão de certificados e descoberta de endpoints em redes industriais.',
    'proj.pex.d': 'Jogo "Par ou Ímpar" controlado por gestos de mão usando visão computacional: reconhecimento em tempo real com Flask, OpenCV e MediaPipe.',
    'stack.title': 'stack',
    'contact.title': 'contato', 'contact.cmd': 'cat contato.txt', 'contact.reveal': 'clique para revelar',
    'exp.date1': 'fev 2026 — atual', 'exp.date2': 'ago 2025 — atual', 'exp.date3': 'set 2024 — jun 2025',
    'tl.telem': 'Telemetria', 'tl.rt': 'Tempo real', 'tl.integ': 'Integrações', 'tl.autom': 'Automação', 'tl.dados': 'Análise de dados',
    'rc.a1': 'Eng. Elétrica · Arquitetura de Sistemas', 'rc.a2': 'Automação · Controle', 'rc.a3': 'Instrumentação · Sensores', 'rc.a4': 'Processos Elétricos e Industriais',
    'stk.sens': 'Sensores', 'stk.rt': 'Tempo real', 'stk.senstel': 'Sensores / telemetria',
    'footer.built': 'construído com terminal, café e OPC UA',
  },
  en: {
    'nav.about': 'about', 'nav.aas': 'aas', 'nav.experience': 'experience', 'nav.research': 'research', 'nav.projects': 'projects',
    'nav.stack': 'stack', 'nav.contact': 'contact',
    'aas.title': 'me as an asset · AAS', 'aas.online': 'online',
    'aas.hint': '// click the submodels to expand',
    'aas.role': '"Software Engineer · CPS"',
    'aas.langs': '"PT (native) · EN (professional) · ES (basic) · DE (beginner)"',
    'aas.refs': '→ references',
    'aas.status': '"researching"', 'aas.avail': '"open to research & collaboration"',
    'exp.title': 'experience', 'exp.sub': '$ git log --author="Camila" --oneline',
    'exp.machforce.r': 'Technical Lead (Hardware & Software)',
    'exp.machforce.d': 'I lead the hardware and software sub-teams of a faculty-supported student team competing in the Shell Eco-marathon. I define the overall architecture and the integration between embedded acquisition and backend, owning the full telemetry pipeline: from on-vehicle sensor acquisition to real-time processing, validation and energy analysis, with time-series persistence and dashboards that support strategic decisions during the race.',
    'exp.uea.r': 'Software Engineering · R&D',
    'exp.uea.d': 'Cyberlabs, the UEA Cyber-Physical Systems Development Center. Software engineering, drivers and integrations that connect hardware to software in real environments: digital representation of physical assets, offline-first architectures and integration via OPC UA / AAS and MQTT. Started as a volunteer and moved on to the software engineering team.',
    'exp.totvs.r': 'Technical Support Analyst',
    'exp.totvs.d': 'Data extraction and manipulation for management reports; creation and automation of SQL reports (CTEs, INSERT, UPDATE); validation and analysis of information to ensure accuracy and integrity of processes; optimization of internal processes and technical support to the team.',
    'extras.title': 'recognition & languages', 'extras.honors': 'honors', 'extras.honor1': '2nd place at the FMM Engineering Fair',
    'extras.comp': 'key skills', 'extras.asset': 'Asset Management',
    'extras.certs': 'certifications',
    'extras.c1': 'Industry 4.0 Foundations — RAMI 4.0 & AAS',
    'extras.c2': 'Introduction to AI: a Practical Approach',
    'extras.c3': 'Containers & Docker (Foundations + Advanced)',
    'extras.c4': 'C# / .NET Development (REST APIs)',
    'extras.c5': 'AI with Orange & Python',
    'extras.langs': 'languages', 'extras.pt': 'Portuguese', 'extras.ptlvl': 'native',
    'extras.en': 'English', 'extras.enlvl': 'professional working', 'extras.es': 'Spanish', 'extras.eslvl': 'elementary', 'extras.de': 'German', 'extras.delvl': 'beginner',
    'hero.role': 'Computer Engineering · Digital Twin & CPS · Embedded/Backend · Tech Lead @ Mach Force · R&D @ UEA',
    'hero.desc': 'I design architectures for physical-digital integration: digital twins, semantic representation of industrial assets (AAS/OPC UA) and computational intelligence for infrastructure-constrained environments.',
    'hero.cta1': 'view projects →', 'hero.cta2': 'lattes cv', 'hero.cta3': 'download cv (pdf)',
    'about.title': 'about',
    'about.p1': "I'm a Computer Engineering student at Faculdade Matias Machline (FMM), in Manaus, Brazil. My research focuses on <strong>distributed cyber-physical system architectures</strong>, emphasizing semantic representation of industrial assets and local (edge) processing in environments with limited connectivity.",
    'about.p2': 'I investigate how to integrate the physical and digital worlds in a scalable, interoperable way, evaluating architectural performance, Industry 4.0 standards and AI-based decision support. I use vehicular simulation and intelligent aquaculture systems as case studies for experimental validation.',
    'about.focus': 'CPS · Digital Twins · Edge AI',
    'json.role': '"Software Engineer · CPS"', 'json.status': '"researching"',
    'research.title': 'research areas',
    'research.1.t': 'Cyber-Physical Systems', 'research.1.d': 'Offline-first architectures integrating physical sensing, communication and semantic representation of the asset.',
    'research.2.t': 'Digital Twins', 'research.2.d': 'Physical-digital modeling structured by RAMI 4.0, with real-time state synchronization and energy estimation.',
    'research.3.t': 'Industrial Semantics', 'research.3.d': 'Asset representation via Asset Administration Shell (AAS) and OPC UA for cross-system interoperability.',
    'research.4.t': 'Edge AI', 'research.4.d': 'Lightweight predictive models (Random Forest, heuristic search) for local decision support on constrained infrastructure.',
    'projects.title': 'projects', 'projects.sub': '$ ls ~/projects --sort=relevance',
    'proj.wip': 'in progress', 'proj.done': 'done', 'proj.award': '2nd place · Eng. Fair',
    'proj.energy.d': 'Embedded real-time energy consumption monitoring system: acquisition with ESP8266, cloud persistence (Firebase) and visualization in an Android app. Awarded 2nd place at the FMM Engineering Fair.',
    'proj.carla.d': 'Energy-focused vehicular digital twin prototype structured by RAMI 4.0. Integrates a longitudinal dynamic model and a battery model to estimate consumption and regeneration in real time within the CARLA simulator. Layered architecture (Integration, Functional, Information, Communication) with AAS synchronized via Eclipse BaSyx, MQTT publishing and an OPC UA server. Validated by 89 unit tests and analytical verification with zero error. Measured raw-to-processed latency over 248 samples: 5.7 ms mean and 9.3 ms at p95, against a 100 ms simulation step.',
    'proj.aqua.d': 'Piscis: offline-first cyber-physical system architecture for aquaculture: embedded sensing (ESP32 + water-quality sensors), MQTT communication and semantic representation via OPC UA. Includes local predictive models (Random Forest) and Genetic Algorithm heuristic search for feeding-management decision support. Evaluates performance, latency and behavior under limited connectivity. Open source.',
    'proj.caica.d': 'Mobile app for automated identification of Indigenous medicinal plants. Distributed architecture with cloud computer vision (AWS S3, Lambda, Rekognition) and an ethnobotanical database, evolving toward a hybrid architecture with local inference and offline operation. Focused on democratizing access to traditional knowledge.',
    'proj.uamqtt.d': 'Industrial communication bridge integrating the OPC UA and MQTT protocols, enabling interoperability between the shop floor and information/cloud layers.',
    'proj.gds.d': 'Proof of concept of an OPC UA Global Discovery Server with node-opcua and open62541, including a gateway-api and an AAS simulator, a basis for certificate management and endpoint discovery in industrial networks.',
    'proj.pex.d': '"Odd or Even" game controlled by hand gestures using computer vision: real-time recognition with Flask, OpenCV and MediaPipe.',
    'stack.title': 'stack',
    'contact.title': 'contact', 'contact.cmd': 'cat contact.txt', 'contact.reveal': 'click to reveal',
    'exp.date1': 'Feb 2026 — present', 'exp.date2': 'Aug 2025 — present', 'exp.date3': 'Sep 2024 — Jun 2025',
    'tl.telem': 'Telemetry', 'tl.rt': 'Real time', 'tl.integ': 'Integrations', 'tl.autom': 'Automation', 'tl.dados': 'Data analysis',
    'rc.a1': 'Electrical Eng. · Systems Architecture', 'rc.a2': 'Automation · Control', 'rc.a3': 'Instrumentation · Sensors', 'rc.a4': 'Electrical and Industrial Processes',
    'stk.sens': 'Sensors', 'stk.rt': 'Real time', 'stk.senstel': 'Sensors / telemetry',
    'footer.built': 'built with a terminal, coffee and OPC UA',
  }
};

let currentLang = 'pt';

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
  });
  document.querySelectorAll('.lang-opt').forEach(o =>
    o.classList.toggle('active', o.dataset.lang === lang));
}

/* ---------- Boot sequence ---------- */
const bootLines = [
  '<span class="dim">[ 0.000000 ] booting cps-kernel v4.0 ...</span>',
  '<span class="dim">[ 0.142 ] mounting</span> /dev/edge <span class="ok">[ ok ]</span>',
  '<span class="dim">[ 0.318 ] init</span> opc-ua server <span class="ok">[ ok ]</span>',
  '<span class="dim">[ 0.501 ] connecting</span> mqtt broker (mosquitto) <span class="ok">[ ok ]</span>',
  '<span class="dim">[ 0.744 ] loading</span> asset administration shell <span class="ok">[ ok ]</span>',
  '<span class="dim">[ 0.998 ] sync</span> digital twin state <span class="ok">[ ok ]</span>',
  '<span class="ok">[ 1.000 ] user: camila felix dos reis — ready.</span>',
];

function runBoot() {
  const boot = document.getElementById('boot');
  const log = document.getElementById('boot-log');
  // skip boot if reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    boot.classList.add('done'); startHero(); return;
  }
  let i = 0;
  const tick = () => {
    if (i < bootLines.length) {
      log.innerHTML += bootLines[i] + '\n';
      i++;
      setTimeout(tick, 230 + Math.random() * 180);
    } else {
      setTimeout(() => { boot.classList.add('done'); startHero(); }, 520);
    }
  };
  tick();
}

/* ---------- Hero typing ---------- */
function startHero() {
  const target = 'whoami --verbose';
  const el = document.getElementById('hero-cmd');
  const out = document.getElementById('hero-output');
  let i = 0;
  const type = () => {
    if (i <= target.length) {
      el.textContent = target.slice(0, i);
      i++;
      setTimeout(type, 70);
    } else {
      setTimeout(() => out.classList.add('show'), 250);
    }
  };
  type();
}

/* ---------- Live clock (p10k right prompt) ---------- */
function initClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const pad = n => String(n).padStart(2, '0');
  const tick = () => {
    const d = new Date();
    el.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- AAS tree toggle ---------- */
function initAas() {
  document.querySelectorAll('.aas-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.aas-node').classList.toggle('open');
    });
  });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section').forEach(s => obs.observe(s));
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = '2026';
  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(currentLang === 'pt' ? 'en' : 'pt');
  });
  initReveal();
  initMail();
  initAas();
  initClock();
  runBoot();
});

/* ---------- Email reveal ---------- */
function initMail() {
  const a = document.getElementById('mail-link');
  if (!a) return;
  const reveal = (e) => {
    e.preventDefault();
    const addr = a.dataset.u + '@' + a.dataset.d;
    a.textContent = addr;
    a.href = 'mailto:' + addr;
  };
  a.addEventListener('click', reveal);
}
