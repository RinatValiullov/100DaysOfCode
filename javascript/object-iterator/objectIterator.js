let proffessions = {
  developer: '4rontender',
  builder: 'Sally',
  baker: 'Mich',
  clown: 'Joker',
};

Object.defineProperty(proffessions, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,

  value: function() {
    let object = this,
      keys = Object.keys(object),
      index = 0;
    return {
      next: function() {
        return {
          value: object[keys[index++]],
          done: index > keys.length,
        };
      },
    };
  },
});

let myIterator = proffessions[Symbol.iterator]();

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

for (const iterator of proffessions) {
  console.log(iterator);
}
