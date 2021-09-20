const slides = document.querySelectorAll(".slide");

const clearActiveClass = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

for (const slide of slides) {
  slide.addEventListener("click", (ev) => {
    clearActiveClass();
    if (!slide.classList.contains("active")) {
      slide.classList.add("active");
    }
  });
}
