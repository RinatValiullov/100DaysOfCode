const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll("img");

let index = 0;

function run() {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  imageContainer.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(run, 2000);
