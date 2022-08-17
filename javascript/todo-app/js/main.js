import { createItem, isEmpty } from "./helpers";

const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const refreshUI = document.querySelector(".refreshUI");
const todoAdd = document.querySelector(".todo__add");

// todoAdd.addEventListener("click", (event) => {
//   event.preventDefault();
//   addTodoItem(todoInput.value);
// });

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = todoInput.value;
  addTodoItem(inputValue);
});

// Object.entries(localStorage).forEach(([key, value]) => {
//   if (/item-\d+?/.test(key)) {
//     const LI = createItem("LI", JSON.parse(value), "todo__item");
//     todoList.appendChild(LI);
//   }
// });

const addToLocalstorage = (value) => {
  const key = `item-${Date.now()}`;
  localStorage.setItem(key, JSON.stringify(value));
};

// delete todo
const deleteTodoItem = (item, button) => {
  button.addEventListener("click", (event) => {
    if (confirm("Are you sure you want to delete todo?")) {
      item.remove();
    }
  });
};

// complete todo
const completeTodoItem = (item, button) => {
  button.addEventListener("click", (event) => {
    item.classList.toggle("todo__item--completed");
  });
};

// add new todo
const addTodoItem = (textNode) => {
  const todoItem = createItem("LI", textNode, "todo__item");

  if (isEmpty(todoInput.value)) {
    alert("Todo cannot be empty");
    todoInput.value = "";
    return;
  }

  completeTodoItem(todoItem, todoItem.querySelector(".todo__item-complete"));
  deleteTodoItem(todoItem, todoItem.querySelector(".todo__item-delete"));

  todoList.appendChild(todoItem);
  todoInput.value = "";

  addToLocalstorage(textNode);
};

// const removeLocalStorageItem = (event) => {
//   Object.entries(localStorage).forEach(([key, value]) => {
//     if (/item-\d+?/.test(key)) {
//       if (
//         JSON.parse(value) === event.target.parentElement.firstChild.textContent
//       ) {
//         localStorage.removeItem(key);
//       }
//     }
//   });
// };

// const removeTodoItem = () => {
//   const deleteButtons = document.querySelectorAll(".todo__item-delete");
//   deleteButtons.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       removeLocalStorageItem(event);
//       event.target.parentElement.remove();
//     });
//   });
// };
// removeTodoItem();

// clear localStorage and UI
refreshUI.addEventListener("click", (event) => {
  localStorage.clear();
  todoList.innerHTML = null;
});
