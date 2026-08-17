// Mobile nav toggle.
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.textContent = open ? '✕' : '☰';
  });
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.textContent = '☰';
    });
  });
}

// "Request a Demo" links from an audience card carry ?role=... — pre-select
// the matching option in the lead form so the visitor doesn't have to repeat
// what they already told us by clicking that card.
const params = new URLSearchParams(window.location.search);
const role = params.get('role');
const roleField = document.getElementById('field-role');
if (role && roleField) {
  const match = Array.from(roleField.options).find((opt) => opt.value === role);
  if (match) roleField.value = role;
}
