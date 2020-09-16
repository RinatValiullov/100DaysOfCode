const progress = document.querySelector('.progress-done');

setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;
}, 500);

