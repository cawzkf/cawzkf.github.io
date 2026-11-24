(() => {
  const locales = ['pt-BR', 'en', 'de', 'zh-CN'];
  const root = document.documentElement;
  const languageSelect = document.getElementById('language');
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('navigation');
  const mailReveal = document.getElementById('mail-reveal');
  const mailLink = document.getElementById('mail-link');
  const desktop = window.matchMedia('(min-width: 1281px)');

  const readPreference = key => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const savePreference = (key, value) => {
    try { localStorage.setItem(key, value); } catch {}
  };
  const meta = (selector, content) => {
    document.querySelector(selector).setAttribute('content', content);
  };

  function applyLanguage(language, persist = false) {
    if (!Object.hasOwn(I18N, language)) return;
    const strings = I18N[language];
    root.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const value = strings[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
      element.setAttribute('aria-label', strings[element.dataset.i18nAriaLabel]);
    });
    languageSelect.value = language;
    document.title = strings['meta.title'];
    meta('meta[name="description"]', strings['meta.description']);
    meta('meta[property="og:title"]', strings['meta.title']);
    meta('meta[property="og:description"]', strings['meta.description']);
    meta('meta[name="twitter:title"]', strings['meta.title']);
    meta('meta[name="twitter:description"]', strings['meta.description']);
    const canonical = 'https://cawzkf.github.io/' + (language === 'pt-BR' ? '' : '?lang=' + language);
    document.querySelector('link[rel="canonical"]').href = canonical;
    meta('meta[property="og:url"]', canonical);
    const ogLocales = { 'pt-BR': 'pt_BR', en: 'en_US', de: 'de_DE', 'zh-CN': 'zh_CN' };
    meta('meta[property="og:locale"]', ogLocales[language]);
    const alternateLocales = locales.filter(locale => locale !== language);
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach((element, index) => {
      element.content = ogLocales[alternateLocales[index]];
    });
    if (persist) savePreference('portfolio-language', language);
    const url = new URL(window.location.href);
    if (language === 'pt-BR') url.searchParams.delete('lang');
    else url.searchParams.set('lang', language);
    try { history.replaceState(null, '', url.href); } catch {}
  }

  function applyTheme(theme, persist = false) {
    root.dataset.theme = theme;
    themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
    if (persist) savePreference('portfolio-theme', theme);
  }

  function setMenu(open, restoreFocus = false) {
    navigation.dataset.open = String(open);
    menuToggle.setAttribute('aria-expanded', String(open));
    if (!open && restoreFocus) menuToggle.focus();
  }

  function revealTarget() {
    if (!window.location.hash) return;
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    let parent = target.parentElement;
    while (parent) {
      if (parent instanceof HTMLDetailsElement) parent.open = true;
      parent = parent.parentElement;
    }
  }

  const queryLanguage = new URL(window.location.href).searchParams.get('lang');
  const savedLanguage = readPreference('portfolio-language');
  applyLanguage(locales.includes(queryLanguage) ? queryLanguage : locales.includes(savedLanguage) ? savedLanguage : 'pt-BR');
  applyTheme(root.dataset.theme || 'dark');
  languageSelect.closest('.language-control').hidden = false;
  themeToggle.hidden = false;
  menuToggle.hidden = false;
  mailReveal.hidden = false;
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const clock = document.getElementById('clock');
  if (clock) {
    const tick = () => {
      const now = new Date();
      clock.textContent = [now.getHours(), now.getMinutes(), now.getSeconds()]
        .map(value => String(value).padStart(2, '0')).join(':');
    };
    tick();
    setInterval(tick, 1000);
  }

  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value, true));
  themeToggle.addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
  menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  desktop.addEventListener('change', () => setMenu(false));
  mailReveal.addEventListener('click', () => {
    const address = mailReveal.dataset.u + '@' + mailReveal.dataset.d;
    mailLink.textContent = address;
    mailLink.href = 'mailto:' + address;
    mailLink.hidden = false;
    mailReveal.hidden = true;
    mailLink.focus();
  });
  window.addEventListener('hashchange', revealTarget);
  window.addEventListener('popstate', () => {
    const locale = new URL(window.location.href).searchParams.get('lang');
    applyLanguage(locales.includes(locale) ? locale : 'pt-BR');
  });
  revealTarget();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll('a').forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
  }
})();
