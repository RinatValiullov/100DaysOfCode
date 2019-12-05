let x = 5;
let y = 7;

let fetchX = () => Promise.resolve(x);
let fetchY = () => Promise.resolve(y);

function add(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise]).then(
    values => values[0] + values[1]
  );
}

let sum = add(fetchX(), fetchY());

sum.then(
  getSum => console.log(getSum),
  err => console.error(err)
);
