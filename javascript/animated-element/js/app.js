const addButton = document.querySelector("button");
const list = document.querySelector("ul");
const item = document.querySelector("li");

addButton.addEventListener("click", () => {
  const clonedItem = item.cloneNode(true);
  list.appendChild(clonedItem);
});
