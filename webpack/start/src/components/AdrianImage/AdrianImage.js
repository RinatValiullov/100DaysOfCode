import Adrian from "./adrian.jpg";
import "./AdrianImage.scss";

class AdrianImage {
  render() {
    const img = document.createElement("img");
    img.alt = "adrian";
    img.src = Adrian;
    img.classList.add("adrian-image");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export { AdrianImage };
