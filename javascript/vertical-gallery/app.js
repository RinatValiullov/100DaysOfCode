const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll(".slide");

  if (activeSlide >= 0 && activeSlide <= 4) {
    slides[activeSlide].classList.add("active");
  } else {
    console.error(
      `You must pass a number in range [0..4] to the function. ${activeSlide} is not in this range!`
    );
  }

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
};

slidesPlugin(3);
