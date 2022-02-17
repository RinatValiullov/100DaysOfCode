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
