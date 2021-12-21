import Adrian from "./adrian.jpg";

const addImage = () => {
  const img = document.createElement("img");
  img.alt = "adrian";
  img.width = 300;
  img.src = Adrian;

  const body = document.querySelector("body");
  body.appendChild(img);
};

export { addImage };
