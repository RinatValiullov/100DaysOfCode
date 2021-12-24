import "./heading.scss";

class Heading {
  render() {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = `Some heading here`;
    body.appendChild(h1);
  }
}

export { Heading };
