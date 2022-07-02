const items = document.querySelector(".todo__items");
const options = document.querySelector(".todo__options");

const todo = {
  action(event) {
    const target = event.target;
    if (target.classList.contains("todo__action")) {
      const action = target.dataset.todoAction;
      const todoItem = target.closest(".todo__item");
      if (action === "deleted" && todoItem.dataset.todoState === "deleted") {
        todoItem.remove();
      } else {
        todoItem.dataset.todoState = action;
      }
      this.save();
    } else if (target.classList.contains("todo__add")) {
      this.add();
      this.save();
    }
  },
  add() {
    const inputText = document.querySelector(".todo__text");
    if (inputText.disabled || !inputText.value.length) {
      return;
    }
    items.insertAdjacentHTML("beforeend", this.create(inputText.value));
    inputText.value = "";
  },
  create(text) {
    return `
      <li class="todo__item" data-todo-state="active">
        <span class="todo__task">${text}</span>
        <span class="todo__action todo__action_restore" data-todo-action="active"></span>
        <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
        <span class="todo__action todo__action_delete" data-todo-action="deleted"></span>
      </li>
    `;
  },
  init() {
    const fromStorage = localStorage.getItem("todo");
    if (fromStorage) {
      items.innerHTML = fromStorage;
    }
    options.addEventListener("change", this.update);
    document.addEventListener("click", this.action.bind(this));
  },
  update() {
    const option = options.value;
    items.dataset.todoOption = option;
    document.querySelector(".todo__text").disabled = option !== "active";
  },
  save() {
    localStorage.setItem("todo", items.innerHTML);
  }
};

todo.init();
