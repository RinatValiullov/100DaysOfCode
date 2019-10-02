let isPositive = a => {
  if (a === 0) {
    throw new Error('Zero Error');
  } else if (a < 0) {
    throw new Error('Negative Error');
  }

  return 'YES';
};

let arrayOfInputs = [3, -6, 0, 8];

console.log(isPositive(arrayOfInputs[0]));
console.log(isPositive(arrayOfInputs[1]));
console.log(isPositive(arrayOfInputs[2]));
console.log(isPositive(arrayOfInputs[3]));
