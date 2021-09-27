const startButton = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const restTime = document.querySelector("#time");
const board = document.querySelector(".board");

let time = 0;
let score = 0;

startButton.addEventListener("click", (event) => {
  event.preventDefault();

  screens[0].classList.add("up");
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

const setTime = (value) => {
  restTime.innerHTML = `00:${value}`;
};

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const colors = Array.from(
  { length: 8 },
  (_, i) => `#${Math.floor(Math.random() * 16777215).toString(16)}`
);

const getRandomColor = () => {
  const randomIndex = ~~(Math.random() * colors.length);
  return colors[randomIndex];
};

const createRandomCircle = () => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const size = getRandomNumber(10, 60);
  const { width: boardWidth, height: boardHeight } =
    board.getBoundingClientRect();
  const x = getRandomNumber(0, boardWidth - size);
  const y = getRandomNumber(0, boardHeight - size);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  circle.style.background = getRandomColor();

  board.append(circle);
};

const decreaseTime = () => {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

const startGame = (t) => {
  let interval = setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(t);
};

const finishGame = () => {
  restTime.parentNode.classList.add("hide");
  board.innerHTML = `<h2>Your score <span class="primary">${score}</span></h2>`;
};

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.dataset.time, 10);

    screens[1].classList.add("up");

    startGame(time);
  }
});
