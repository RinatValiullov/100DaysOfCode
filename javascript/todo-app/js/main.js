import { createElement } from "./helpers";

const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const refreshUI = document.querySelector(".refreshUI");

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
  addToLocalstorage(textNode);

  todoList.appendChild(LI);

  todoInput.value = "";
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodoItem(todoInput.value);
});

refreshUI.addEventListener("click", (event) => {
  localStorage.clear();
  todoList.innerHTML = null;
});
