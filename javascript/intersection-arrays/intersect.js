let numbers1 = new Set([4, 8, 6, 2]);
let numbers2 = new Set([8, 4, 3, 0, 6]);

function intersection(array1, array2) {
  return [...array1].filter(element => array2.has(element));
}

let intersectionResult = intersection(numbers1, numbers2);

console.log(intersectionResult);
