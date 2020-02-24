let userInput: unknown; // more restrictive than `any` type
let userName!: string;

userInput = 5;
userInput = 'string';

if (typeof userName === 'string') {
  let userName = userInput;
}

console.log(userName, userInput);

// using a custom type guard function

function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) &&
    value.every(element => typeof element === 'number')
  );
}

const unknownValue: unknown = [4, 5, 6, 7, 8, 9];

if (isNumberArray(unknownValue)) {
  const max = Math.max(...unknownValue);
  console.log(max);
}
