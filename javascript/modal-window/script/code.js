const open = document.querySelector('.open');
const close = document.querySelector('.close');
const container = document.querySelector('.popup-container');

open.addEventListener('click', (event) => {
  container.classList.add('active');
});

close.addEventListener('click', (event) => {
  container.classList.remove('active');
});
