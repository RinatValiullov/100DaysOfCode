import { createElement } from "./helpers";

const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const refreshUI = document.querySelector(".refreshUI");
const todoAdd = document.querySelector(".todo__add");

todoAdd.addEventListener("click", (event) => {
  event.preventDefault();
  addTodoItem(todoInput.value);
});

Object.entries(localStorage).forEach(([key, value]) => {
  if (/item-\d+?/.test(key)) {
    const LI = createElement("LI", "todo__item", JSON.parse(value));
    todoList.appendChild(LI);
  }
});

const addToLocalstorage = (value) => {
  const key = `item-${Date.now()}`;
  localStorage.setItem(key, JSON.stringify(value));
};

const addTodoItem = (textNode) => {
  const LI = createElement("LI", "todo__item", textNode);

  todoList.appendChild(LI);

  todoInput.value = "";

  addToLocalstorage(textNode);
};

const removeLocalStorageItem = (event) => {
  Object.entries(localStorage).forEach(([key, value]) => {
    if (/item-\d+?/.test(key)) {
      if (
        JSON.parse(value) === event.target.parentElement.firstChild.textContent
      ) {
        localStorage.removeItem(key);
      }
    }
  });
};

const removeTodoItem = () => {
  const deleteButtons = document.querySelectorAll(".todo__item-delete");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      removeLocalStorageItem(event);
      event.target.parentElement.remove();
    });
  });
};
removeTodoItem();

refreshUI.addEventListener("click", (event) => {
  localStorage.clear();
  todoList.innerHTML = null;
});
