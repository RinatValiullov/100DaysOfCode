import "./main.css";

class HelloButton {
  render() {
    const button = document.createElement("button");
    button.innerHTML = `Say hello!`;
    button.classList.add("hello-btn");
    const body = document.querySelector("body");

    button.addEventListener("click", (event) => {
      const p = document.createElement("p");
      p.innerHTML = "Hello, world!";
      p.classList.add("hello-paragraph");
      body.appendChild(p);
    });

    body.appendChild(button);
  }
}

export { HelloButton };
