let getMaxLessThanK = (n, k) => {
  let max_anb = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      if ((a & b) < k && (a & b) > max_anb) {
        max_anb = a & b;
      }
    }
  }
  return max_anb;
};

let result1 = getMaxLessThanK(5, 2);
let result2 = getMaxLessThanK(8, 5);
let result3 = getMaxLessThanK(2, 2);

console.log(result1, result2, result3);
