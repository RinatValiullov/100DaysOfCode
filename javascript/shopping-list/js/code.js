// Remove item
/* old way */
// const deleteButtons = document.querySelectorAll(".delete");

// deleteButtons.forEach((deleteButton) => {
//   deleteButton.addEventListener("click", (event) => {
//     const LI = event.target.parentElement;
//     LI.parentElement.removeChild(LI);
//   });
// });

/* New way */
const groceryList = document.querySelector(".grocery-list ul");

const removeItem = (event) => {
  if (event.target.className === "delete") {
    let LI = event.target.parentElement;
    LI.remove();
  }
};

groceryList.addEventListener("click", removeItem);

// Add item
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const createSpan = (classString, content) => {
  const span = document.createElement("SPAN");
  span.classList.add(classString);
  span.innerHTML = content;
  return span;
};

const addItem = document.querySelector(".add-item");

addItem.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = addItem.querySelector("input").value;

  const li = document.createElement("LI");

  const spanGrocery = createSpan("item", capitalizeFirstLetter(value));
  const spanDelete = createSpan("delete", "Delete");

  li.append(spanGrocery, spanDelete);

  groceryList.appendChild(li);
});

// Hide list
const hideCheckbox = document.querySelector("#hide");

hideCheckbox.addEventListener("change", (event) => {
  const groceryList = document.querySelector(".grocery-list");
  if (event.target.checked) {
    groceryList.style.display = "none";
  } else {
    groceryList.style.display = "block";
  }
});
