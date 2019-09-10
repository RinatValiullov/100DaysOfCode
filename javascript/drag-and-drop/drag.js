let dragTarget = document.querySelector('.dragTarget');
let dropZone = document.querySelector('.dropZone');

dragTarget.addEventListener('dragstart', function(event) {
  
    event.dataTransfer.setData('text/plain', event.target.className.substr(5));

    event.currentTarget.style.background = '#d82578';

    console.dir(event.dataTransfer);

});


dropZone.addEventListener('dragover', function(event) {
  event.preventDefault();
  console.log(event.target);
});


// dragTarget.addEventListener('drop', function(event) {
//   // console.log(event.dataTransfer.getData('text/plain'));
// });