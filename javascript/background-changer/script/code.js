const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomBg();
});

const randomBg = () => {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
};
