const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !isOpen);
});
navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    navigation.classList.remove('is-open');
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name').trim();
  const email = form.get('email').trim();
  const message = form.get('message').trim();
  const subject = encodeURIComponent('Project enquiry from ' + name);
  const nl = String.fromCharCode(10);
  const body = encodeURIComponent('Hi Saheli,' + nl + nl + message + nl + nl + 'You can reach me at ' + email + '.' + nl + nl + name);
  window.location.href = 'mailto:sahelisultana2525@gmail.com?subject=' + subject + '&body=' + body;
});
