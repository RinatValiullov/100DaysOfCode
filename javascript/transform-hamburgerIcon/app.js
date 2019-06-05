let icon = document.querySelector('.hamburger');

icon.addEventListener('click', event => event.target.closest('.hamburger').classList.toggle('active'))
