let userInput: unknown; // more restrictive than `any` type
let userName!: string;

userInput = 5;
userInput = 'string';

if (typeof userName === 'string') {
  let userName = userInput;
}

console.log(userName, userInput);
