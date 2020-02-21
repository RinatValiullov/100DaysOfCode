function add(input1: number, input2: number): number {
  return input1 + input2;
}

const sum = add(7, 9);

function printResult(num: number): void {
  console.log(`Result: ${num}`);
  return;
}

function mult(n1: number, n2: number): undefined {
  console.log(n1 + n2);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(sum);

let combinedValue: (a: number, b: number) => number;
combinedValue = add;
// combinedValue = mult;
// combinedValue = '45'; // problem because combinedValue is type of any

console.log(combinedValue(7, 8));

addAndHandle(11, 15, (result) => {
  console.log(result);
});
