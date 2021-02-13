const toggle = document.querySelector("#toggle");

toggle.addEventListener("change", function (event) {
  document.body.classList.toggle("dark", event.target.checked);
});
