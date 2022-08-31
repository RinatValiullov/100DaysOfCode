const storageContainer = document.querySelector(".storage-container");
const outputText = document.querySelector(".output__text");
const outputImage = document.querySelector(".output__image");

const colorType = document.querySelector("#colorType");
const fontType = document.querySelector("#fontType");
const imageType = document.querySelector("#imageType");

const fillStorage = () => {
  localStorage.setItem("color", colorType.value);
  localStorage.setItem("font", fontType.value);
  localStorage.setItem("image", imageType.value);

  styleSection();
};

const styleSection = () => {
  const currentColor = localStorage.getItem("color");
  const currentFont = localStorage.getItem("font");
  const currentImage = localStorage.getItem("image");

  colorType.value = currentColor;
  fontType.value = currentFont;
  imageType.value = currentImage;

  storageContainer.style.backgroundColor = currentColor;
  outputText.style.fontFamily = currentFont;
  outputImage.setAttribute("src", currentImage);
};

if (!localStorage.length) {
  fillStorage();
} else {
  styleSection();
}

colorType.addEventListener("change", fillStorage);
fontType.addEventListener("change", fillStorage);
imageType.addEventListener("change", fillStorage);
