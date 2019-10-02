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

let target = 0;
function watcher(myFunc) {
  target = myFunc;
  dep.depend();
  target();
  target = null;
}

watcher(() => {
  total = price * discount;
});
