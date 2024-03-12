const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
  }
});
