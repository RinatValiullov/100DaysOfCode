const container = document.querySelector(".container");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.childElementCount;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

let activeSlideIndex = 0;

const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const heightContainer = container.clientHeight;

  console.log("activeSlideIndex", activeSlideIndex);
  console.log("slidesCount", slidesCount);

  mainSlide.style.transform = `translateY(-${
    activeSlideIndex * heightContainer
  }px)`;

  console.log(mainSlide.style.transform);

  sidebar.style.transform = `translateY(${
    activeSlideIndex * heightContainer
  }px)`;
};

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    changeSlide("up");
  } else if (event.key === "ArrowDown") {
    changeSlide("down");
  }
});

upButton.addEventListener("click", () => {
  changeSlide("up");
});

downButton.addEventListener("click", () => {
  changeSlide("down");
});
