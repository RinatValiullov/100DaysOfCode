import { legacy_createStore as createStore } from "redux";
const counterDiv = document.querySelector(".click");
// const controls = document.querySelectorAll("button");
const incrementButton = document.querySelector(".increment");
const decrementButton = document.querySelector(".decrement");
const resetButton = document.querySelector(".reset");

// A reducer - "counter" function. It accepts "state" and "action" params
// that it will process.
const counter = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RESET") {
    return 0;
  }

  return state;
};

// A store which holds a state tree
const store = createStore(counter);

// An action "incrementAction" with "type" field - type of action being performed.
// Actions are the only way to get data into the store.
const incrementAction = {
  type: "INCREMENT"
};

const decrementAction = {
  type: "DECREMENT"
};

const resetAction = {
  type: "RESET"
};

// getState method return a current state tree - "0" number.
counterDiv.innerText = store.getState();

// Add an event listener to our div
// Dispatch method is the only way to trigger a state change.
incrementButton.addEventListener("click", () => {
  store.dispatch(incrementAction);
});
decrementButton.addEventListener("click", () => {
  store.dispatch(decrementAction);
});
resetButton.addEventListener("click", () => {
  store.dispatch(resetAction);
});

// Just render UI with the current state
const count = () => {
  counterDiv.innerText = store.getState();
  console.log(store.getState());
};

// Subscribe to our changes. "count" function will be called any time an action
// is dispatched.
store.subscribe(count);
