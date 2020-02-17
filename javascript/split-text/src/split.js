import { text } from './text';

const segments = [];
let startCounter = -1; // need think to change the logic but not the startCounter = 0

for (let idx in text) {
  if (text.charCodeAt(idx) === 44) {
    // code '44' is for comma sign ','
    segments.push(text.substring(startCounter + 1, idx));
    startCounter = Number(idx) + 1;
    console.log(`startCounter - ${startCounter} and idx - ${idx}`);
  }
}
segments.push(text.substring(startCounter + 1));

console.log(segments);
