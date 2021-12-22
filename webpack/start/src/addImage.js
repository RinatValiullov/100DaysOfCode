import Adrian from "./adrian.jpg";
import altText from "./altText.txt";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = Adrian;

  const body = document.querySelector("body");
  body.appendChild(img);
};

export { addImage };
