import { createItem, isEmpty, uniqueId } from "./helpers";

const todoForm = document.querySelector(".todo__form");
const todoInput = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const refreshUI = document.querySelector(".refreshUI");
// const todoAdd = document.querySelector(".todo__add");

let todos = [];

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = todoInput.value;
  addTodoItem(inputValue, "todos");
});

/*== Delete logic */

// delete todo from localStorage
const removeItem = (array, item) => {
  const filteredArray = array.filter((element) => {
    return element.id !== item.dataset.id;
  });

  return filteredArray;
};

// delete todo
const deleteTodoItem = (item, button, key) => {
  button.addEventListener("click", (event) => {
    if (confirm("Are you sure you want to delete todo?")) {
      todos = JSON.parse(localStorage.getItem(key));

      const updatedTodos = removeItem(todos, item);

      localStorage.setItem(key, JSON.stringify(updatedTodos));

      item.remove();
    }
  });
};

/* Delete logic ==*/

/*== Complete logic */

// change localStorage "done" property
const changeItemDone = (array, item) => {
  array.map((element) => {
    if (element.id === item.dataset.id) {
      element.done = !element.done;
    }
  });
};

// complete todo
const completeTodoItem = (item, button, key) => {
  button.addEventListener("click", (event) => {
    todos = JSON.parse(localStorage.getItem(key));
    item.classList.toggle("todo__item--completed");
    changeItemDone(todos, item);

    localStorage.setItem(key, JSON.stringify(todos));

    JSON.parse(localStorage.getItem(key)).forEach((e) => console.log(e.done));
  });
};

/* Complete logic ==*/

// add new todo
const addTodoItem = (textNode, key = "todos") => {
  const keyLocalStorage = key;
  const todoItem = createItem("LI", textNode, "todo__item");
  todoItem.setAttribute("data-id", `todoItem-${uniqueId()}`);

  if (isEmpty(todoInput.value)) {
    alert("Todo cannot be empty");
    todoInput.value = "";
    return;
  }

  completeTodoItem(
    todoItem,
    todoItem.querySelector(".todo__item-complete"),
    (key = keyLocalStorage)
  );
  deleteTodoItem(
    todoItem,
    todoItem.querySelector(".todo__item-delete"),
    (key = keyLocalStorage)
  );

  const createItemObject = (array) => {
    const itemObject = {};
    itemObject.title = todoInput.value;
    itemObject.id = todoItem.dataset.id;
    itemObject.done = false;

    array.push(itemObject);
  };
  createItemObject(todos);
  localStorage.setItem(key, JSON.stringify(todos));

  todoList.appendChild(todoItem);
  todoInput.value = "";

  // addToLocalstorage(textNode);
};

// clear localStorage and UI
refreshUI.addEventListener("click", (event) => {
  localStorage.clear();
  todoList.innerHTML = null;
});
