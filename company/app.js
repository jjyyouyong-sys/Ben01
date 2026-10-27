'use strict';
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
  menu.textContent = 'Menu +';
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
  menu.textContent = open ? 'Close −' : 'Menu +';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); }
});
const form = document.getElementById('inquiry');
const preview = document.getElementById('enquiry-preview');
const status = document.getElementById('status');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = form.elements.namedItem('name').value.trim();
  const email = form.elements.namedItem('email').value.trim();
  const message = form.elements.namedItem('message').value.trim();
  if (!name || !message) { status.textContent = 'Please enter a name and message containing more than spaces.'; return; }
  document.getElementById('preview-text').textContent = `From: ${name}\nEmail: ${email}\n\n${message}`;
  preview.hidden = false;
  status.textContent = 'Preview created. No message has been sent.';
});
document.getElementById('clear').addEventListener('click', () => {
  form.reset(); preview.hidden = true;
  document.getElementById('preview-text').textContent = '';
  status.textContent = 'Your details have been cleared.';
  document.getElementById('name').focus();
});
const privacyToggle = document.getElementById('privacy-toggle');
privacyToggle.addEventListener('click', () => {
  const open = privacyToggle.getAttribute('aria-expanded') !== 'true';
  privacyToggle.setAttribute('aria-expanded', String(open));
  document.getElementById('privacy').hidden = !open;
});
