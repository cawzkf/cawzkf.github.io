(() => {
  let theme;
  try { theme = localStorage.getItem('portfolio-theme'); } catch {}
  if (theme !== 'light' && theme !== 'dark') {
    theme = 'dark';
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.add('js');
})();
