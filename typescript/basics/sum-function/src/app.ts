const inp1 = document.querySelector('#num1')! as HTMLInputElement;
const inp2 = document.querySelector('#num2')! as HTMLInputElement;
const addButton = document.querySelector('button')! as HTMLButtonElement;

const add = (input1: number, input2: number): number => {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2;
  } else {
    return Number(input1) + Number(input2);
  }
};

addButton.addEventListener('click', function () {
  const resultSum: number = add(Number(inp1.value), Number(inp2.value));
  console.log(`The result: ${resultSum}`);
});
