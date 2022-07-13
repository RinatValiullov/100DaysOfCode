const tabs = document.querySelectorAll(".tab");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");
const images = document.querySelectorAll(".about-image img");

about.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    // image.src = `./assets/${id}.jpg`;
    images.forEach((image) => {
      image.classList.remove("fade-in");
      if (image.alt === id) {
        image.classList.add("fade-in");
      }
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      event.target.classList.add("active");
    });
    content.forEach((article) => {
      article.classList.remove("active");
    });
    const targetArticle = document.querySelector(`#${id}`);
    targetArticle.classList.add("active");
  }
});
