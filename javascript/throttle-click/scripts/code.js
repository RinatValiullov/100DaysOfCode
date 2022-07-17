const button = document.querySelector("button");

const throttle = (fn, delay) => {
  return () => {
    let prevCall = this.lastCall;
    this.lastCall = Date.now();
    if (prevCall === undefined || this.lastCall - prevCall > delay) {
      fn();
    }
  };
};

const clickedBlock = () => {
  if (button.textContent === "click me") {
    button.textContent = "wait 2 seconds";
  }
  setTimeout(() => (button.textContent = "click me"), 2000);

  const block = document.createElement("div");
  const text = document.createTextNode("Clicked");
  block.appendChild(text);
  block.style.cssText = `
    background-color: blue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 10px;
    height: 100px;
    width: 100px;
  `;

  document.body.appendChild(block);
};

const throttled = throttle(clickedBlock, 2000);

button.addEventListener("click", throttled);
