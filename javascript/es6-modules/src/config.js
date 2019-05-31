export let apiKey = 'qwerty123';

export let myUrl = 'https://4ront.ru';

export function sample(name) {
    console.log(`Hello, ${name}`);
}

let var1 = 5;
let var2 = 6;

export { var1 as myVar1, var2 };


let def = 'default';

export default def;
