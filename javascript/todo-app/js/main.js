(function () {
  const todoList = document.querySelector(".todoList");
  const todoForm = document.querySelector("form");
  const todoInput = document.querySelector(".todoInput");
  const refreshUI = document.querySelector(".refreshUI");

  const todos = [];

  const addTodo = (todoText) => {
    todos.push(todoText);
    const todoItem = document.createElement("LI");
    todoItem.innerText = todoText;
    todoList.appendChild(todoItem);
    localStorage.setItem("todos", JSON.stringify(todos));
    todoInput.value = "";
  };

  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
  existingTodos.forEach((todo) => addTodo(todo));

  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo(todoInput.value);
  });

  refreshUI.addEventListener("click", (event) => {
    localStorage.clear();
    todoList.innerHTML = null;
  });
})();
