document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('#primary-menu');

  if (!toggle || !menu) {
    console.error('Nav toggle or menu not found');
    return;
  }

  toggle.addEventListener('click', function () {
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open');

    console.log('Menu toggled:', !isOpen);
  });
});
