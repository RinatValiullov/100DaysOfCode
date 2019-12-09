const targetString = 'Hello, I am 4rontender!';

// positive lookahead assertion: 'er'
let msg1 = targetString.match(/(e.)(?=\W)/g);

// negative lookahead assertion: ['el', 'en']
let msg2 = targetString.match(/(e.)(?!\W)/g);

// negative lookahead assertion: [ 'ell', 'end', 'er!' ]
let msg3 = targetString.match(/(e.{2})(?!\W)/g);

console.log(msg1);
console.log(msg2);
console.log(msg3);
