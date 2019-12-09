const targetString = 'Hello, I am 4rontender!';

// positive lookahead assertion: 'er'
let msg1 = targetString.match(/(e.)(?=\W)/g);

// negative lookahead assertion: ['el', 'en']
let msg2 = targetString.match(/(e.)(?!\W)/g);

// negative lookahead assertion: [ 'ell', 'end', 'er!' ]
let msg3 = targetString.match(/(e.{2})(?!\W)/g);

// positive lookahead assertion: 
let msg4 = targetString.match(/(\s)(?=\d)/g);

console.log(msg1);
console.log(msg2);
console.log(msg3);
console.log(msg4);
