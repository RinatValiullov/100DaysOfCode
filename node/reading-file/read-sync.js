let fs = require('fs');

let content;

try {
  content = fs.readFileSync('file.md', 'utf-8');
} catch (error) {
  console.log(error);
}

let hash = content.split(' ')[0];

console.log(`Hash sign: ${hash}`);