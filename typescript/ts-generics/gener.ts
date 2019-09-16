let arrayOfNumbers: Array<number> = [1,1,2,3,5,8,13,21];
let arrayOfStrings: Array<string> = ['4ront', 'JavaScript'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
