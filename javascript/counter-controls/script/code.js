const counterValue = document.querySelector(".counter-value");
const controls = document.querySelectorAll(".controls button");

let value = 0;

controls.forEach((control) => {
  control.addEventListener("click", (event) => {
    const controlClasses = event.currentTarget.classList;
    if (controlClasses.contains("decrease")) {
      value--;
    } else if (controlClasses.contains("increase")) {
      value++;
    } else {
      value = 0;
    }

    if (value > 0) {
      counterValue.style.color = "blue";
    } else if (value < 0) {
      counterValue.style.color = "red";
    } else if (value === 0) {
      counterValue.style.color = "currentColor";
    }

    counterValue.textContent = value;
  });
});
