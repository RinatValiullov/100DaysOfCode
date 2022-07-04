const colors = ["green", "red", "rgb(142, 150, 200)", "#f45aef"];

const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".color-code");

const getRandomNumber = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return randomNumber;
};

btn.addEventListener("click", (event) => {
  const randomNumber = getRandomNumber(colors);
  document.body.style.backgroundColor = colors[randomNumber];
  colorCode.textContent = colors[randomNumber];
});
