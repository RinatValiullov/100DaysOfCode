const { bubbleSort } = require('@humanwhocodes/bubble-sort');

function log(param) {
  console.log(param);
}

const arrayOfItems = [4, 12, 9, 8, 2, 0];

const arr100 = [...Array(100)].map(() => Math.floor(Math.random() * 100));
const arr1000 = [...Array(1000)].map(() => Math.floor(Math.random() * 100));

function sortMyArray(array) {
  return bubbleSort(array);
}

// log(sortMyArray(arrayOfItems));

for (let i = 0; i < 20; i++) {
  console.time('bubbleSort100');

  sortMyArray(arr100);

  console.timeEnd('bubbleSort100');
}

console.log('********');

for (let i = 0; i < 20; i++) {
  console.time('bubbleSort1000');

  sortMyArray(arr1000);

  console.timeEnd('bubbleSort1000');
}
