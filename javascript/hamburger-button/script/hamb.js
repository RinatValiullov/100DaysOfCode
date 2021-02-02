const nav = document.querySelector('nav');
const btn = document.querySelector('button');

btn.addEventListener('click', (event) => {
  // if (nav.className !== 'active') {
  nav.classList.toggle('active');
  btn.classList.toggle('active');
  // } else {
  // nav.classList.remove('active');
  // }
});
