let data = { price: 5, discount: 0.8 };
let target = null;

// Observer pattern
class Dep {
  constructor() {
    this.subscribers = [];
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

Object.keys(data).forEach(key => {
  let internalValue = data[key];

  let dep = new Dep();

  Object.defineProperty(data, key, {
    get() {
      dep.depend(); // Remember the target we're running
      return internalValue;
    },
    set(newValue) {
      internalValue = newValue;
      dep.notify(); // Re-run stored function
    }
  });
});

function watcher(myFunc) {
  target = myFunc;
  target();
  target = null;
}

watcher(() => {
  data.total = data.price * data.discount;
});
