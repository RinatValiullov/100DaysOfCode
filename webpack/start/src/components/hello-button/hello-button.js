import "./Hello-button.scss";

class HelloButton {
  buttonCssClass = "hello-btn";
  render() {
    const button = document.createElement("button");
    button.innerHTML = `Say hello!`;
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector("body");

    button.addEventListener("click", () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello, world!";
      p.classList.add("hello-paragraph");
      body.appendChild(p);
    });

    body.appendChild(button);
  }
}

export { HelloButton };
