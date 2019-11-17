const firstName = 'inat';
const lastName = 'aliullov';

function greet(strings, ...values) {
  let result = '';

  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (values[i - 1].endsWith('t')) {
        result += values[i - 1].padStart(values[i - 1].length + 1, 'R');
      } else if (values[i - 1].endsWith('v')) {
        result += values[i - 1].padStart(values[i - 1].length + 1, 'V');
      }
    }
    result += strings[i];
  }
  return result;
}


const greetingMessage = greet`Hello, guys! My name is ${firstName} ${lastName}!`;

console.log(greetingMessage);
