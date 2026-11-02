const root = document.documentElement;
const toggle = document.getElementById('theme');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let chosenTheme = root.dataset.theme;

function syncToggle() {
  const dark = chosenTheme ? chosenTheme === 'dark' : systemTheme.matches;
  root.dataset.theme = dark ? 'dark' : 'light';
  toggle.checked = dark;
  toggle.setAttribute('aria-label', 'Dark mode');
}

syncToggle();
systemTheme.addEventListener('change', syncToggle);
toggle.addEventListener('change', () => {
  const theme = toggle.checked ? 'dark' : 'light';
  chosenTheme = theme;
  root.dataset.theme = theme;
  try { localStorage.setItem('theme', theme); } catch {}
});
