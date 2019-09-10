let dragTarget = document.querySelector('.dragTarget');
let dropZone = document.querySelector('.dropZone');

dragTarget.addEventListener('dragstart', function(event) {
  
    event.dataTransfer.setData('text/plain', event.target.classList);

    event.currentTarget.style.background = '#d82578';

    console.log(event.dataTransfer);

});


// dragTarget.addEventListener('dragover', function(event) {
//   event.preventDefault();
// });


// dragTarget.addEventListener('drop', function(event) {
//   // console.log(event.dataTransfer.getData('text/plain'));
// });