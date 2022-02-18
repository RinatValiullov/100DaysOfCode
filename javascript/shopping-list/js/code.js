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

  // clear the input box
  addItem.querySelector("input").value = null;

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

// Search for item

const SEARCH = document.forms["search"].querySelector("input");

SEARCH.addEventListener("keyup", (event) => {
  let text = event.target.value.toLowerCase();

  const groceryList = document.querySelector(".grocery-list ul");
  const groceries = groceryList.querySelectorAll("li");
  groceries.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;
    let groceryNameLower = grocery.firstElementChild.textContent.toLowerCase();
    if (groceryNameLower.indexOf(text) === -1) {
      grocery.style.display = "none";
    } else {
      grocery.style.display = "flex";
    }
  });
});

// Tabs

const heading = document.querySelector(".heading");
const panels = document.querySelectorAll(".panel");

let selectedPanel = null;

heading.addEventListener("click", (event) => {
  let dataAttribute = event.target.dataset.clicked;

  if (event.target.tagName === "LI") {
    if (selectedPanel !== null) {
      selectedPanel.classList.toggle("selected");
    }
    selectedPanel = event.target;
    selectedPanel.classList.toggle("selected");
  }

  let targetPanel = document.querySelector(dataAttribute);
  panels.forEach((panel) => {
    if (panel === targetPanel) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
});

let answerButton = document.querySelector(".show-answer");

const answer = () => {
  const answerPar = document.querySelector(".answer");
  answerPar.classList.add("show");
  answerPar.textContent = "AN IMPASTA";
  answerButton.style.display = "none";
};

answerButton.addEventListener("click", answer);
