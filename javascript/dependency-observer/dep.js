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

let dep = new Dep();

let price = 15;
let discount = 0.8;
let total = 0;

/* Solution: A Dependency Class */

// let target = () => {
//   total = price * discount;
// };

// dep.depend(); // add target to our subscribers

// target(); // get the total

// console.log('Get the total: ', total);
// price = 25;
// console.log('After changing the price, nothing changed: ', total);
// dep.notify(); // run the subscribers
// console.log('Right result: ', total);
// price = 35;
// dep.notify();
// console.log('Right result: ', total);

/* Solution: A Dependency Class */

/* Solution: Watcher Function */

// let target = 0;
// function watcher(myFunc) {
//   target = myFunc;
//   dep.depend();
//   target();
//   target = null;
// }

// watcher(() => {
//   total = price * discount;
// });

/* Solution: Watcher Function */

/* Solution: Object.defineProperty() */

let data = { price: 5, discount: 0.8 };

let internalValue = data.price;

Object.defineProperty(data, 'price', {
  get() {
    console.log(`Getting price: ${internalValue}`);
    return internalValue;
  },

  set(value) {
    console.log(`Setting price to: ${value}`);
    internalValue = value;
  }
});

total = data.price * data.discount;
data.price = 12;

/* Solution: Object.defineProperty() */
