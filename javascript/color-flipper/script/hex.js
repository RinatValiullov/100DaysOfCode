const btn = document.querySelector(".btn");
const colorCode = document.querySelector(".color-code");

const getRandomHex = () => {
  const randomHex = (Math.random() + 1).toString(16).substring(9);
  return randomHex;
};

btn.addEventListener("click", (event) => {
  const randomHexNumber = getRandomHex();
  document.body.style.backgroundColor = `#${randomHexNumber}`;
  colorCode.textContent = `#${randomHexNumber}`;
});
