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

printResult(sum);
