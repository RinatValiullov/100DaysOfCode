const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

const dragover = (event) => {
  event.preventDefault();
};
const dragenter = (event) => {
  event.target.classList.add('hovered');
};
const dragleave = (event) => {
  event.target.classList.remove('hovered');
};
const dragdrop = (event) => {
  event.target.classList.remove('hovered');
  event.target.appendChild(item);
};

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

const dragStart = (event) => {
  event.target.classList.add('dragged');
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0);
};
const dragEnd = (event) => {
  event.target.classList.remove('dragged', 'hide');
};

item.addEventListener('dragstart', dragStart);

item.addEventListener('dragend', dragEnd);
