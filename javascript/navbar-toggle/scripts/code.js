const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const social = document.querySelector(".social-icons");

navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
  social.classList.toggle("show-social");
});
