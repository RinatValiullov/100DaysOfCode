import "./style.css";

const board = document.querySelector("#board");
const SQUARES_NUMBER = 600;

const colors = Array.from(
  { length: 8 },
  (_, i) => `#${Math.floor(Math.random() * 16777215).toString(16)}`
);

const getRandomColor = () => {
  const randomIndex = ~~(Math.random() * colors.length);
  return colors[randomIndex];
};

const setColor = (element) => {
  const randomColor = getRandomColor();
  element.style.backgroundColor = randomColor;
  element.style.boxShadow = `0px 0px 2px ${randomColor}, 0 0 10px ${randomColor}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
};

for (let index = 0; index < SQUARES_NUMBER; index++) {
  const square = document.createElement("DIV");
  square.classList.add("square");

  square.addEventListener("mouseover", (event) => {
    setColor(square);
  });

  square.addEventListener("mouseleave", (event) => {
    removeColor(square);
  });

  board.append(square);
}
