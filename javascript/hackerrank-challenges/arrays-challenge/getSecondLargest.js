let getSecondLargest = nums => {
  // helper function
  let maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

  return Math.min.apply(null, maxN(new Set(nums), 2));
};

let arrayOfNumbers = ['2', '3', '6', '6', '5'];

let secondLargestNumber = getSecondLargest(arrayOfNumbers);

console.log(secondLargestNumber);
