let factorial = n => {
  return n < 2 ? 1 : n * factorial(n - 1);
};

let factorialOf4 = factorial(4);

console.log(factorialOf4);
