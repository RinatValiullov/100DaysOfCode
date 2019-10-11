let arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13, 21];
let arrayOfStrings: Array<string> = ['4ront', 'JavaScript'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

// Base restrictions of Generic Types

interface Length {
  length: number;
}

function getLength<T extends Length>(arg: T): number {
  return arg.length;
}

let result1 = reverse(arrayOfNumbers);
let result2 = reverse(arrayOfStrings);
