import { legacy_createStore as createStore } from "redux";

let countId = 1;

// Reducer function as a simple array with todos
const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { id: countId++, title: action.payload.title, completed: false }
      ];
    }

    case "COMPLETE_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload.todoId);
    }

    default:
      return state;
  }
};

// Create a store
const store = createStore(todoList);

// Action creator - a function that returns an action (object with "type" and
// "payload" properties)
const addTodo = (todoTitle) => ({
  type: "ADD_TODO",
  payload: {
    title: todoTitle
  }
});

const completeTodo = (todoId) => ({
  type: "COMPLETE_TODO",
  payload: { todoId }
});

const deleteTodo = (todoId) => ({
  type: "DELETE_TODO",
  payload: { todoId }
});

console.log("Initial state", store.getState());

store.dispatch(addTodo("Learn React"));
store.dispatch(addTodo("Learn Redux"));
store.dispatch(addTodo("Learn MySQL"));
store.dispatch(addTodo("Learn GraphQL"));
console.log("Add two todo items", store.getState());

store.dispatch(completeTodo(2));
console.log('Complete todo item with "id": 2', store.getState());

store.dispatch(deleteTodo(3));
console.log('Delete todo item with "id": 3', store.getState());
