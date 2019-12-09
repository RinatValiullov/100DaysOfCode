const targetString = 'Hello, I am 4rontender!';

// positive lookbehind assertion: 'er'
let msg1 = targetString.match(/(?<=d)(e.)/g);

// negative lookbehind assertion: ['el', 'en']
let msg2 = targetString.match(/(?<!d)(e.)/g);

console.log(msg1);
console.log(msg2);
