const clickCounter = new Map();
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  clickCounter.set(button, 0);
  button.addEventListener("click", function () {
    let value = Number(button.innerHTML);
    clickCounter.set(this, value + 1);
    this.innerHTML = ++value;
  });
});
