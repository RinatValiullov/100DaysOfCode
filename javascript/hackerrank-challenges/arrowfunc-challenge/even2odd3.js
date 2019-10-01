let modiffyArray = nums => {
  return nums.map(i => (i % 2 === 0 ? i * 2 : i * 3));
};

let nums = [1, 2, 3, 4, 5];

let resultArray = modiffyArray(nums);

console.log(resultArray);
