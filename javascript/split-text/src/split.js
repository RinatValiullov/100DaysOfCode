"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const text_1 = require("./text");
const segments = [];
let startCounter = -1; // need think to change the logic but not the startCounter = 0
for (let idx = 0; idx < text_1.text.length; idx++) {
    let character = text_1.text.charCodeAt(idx);
    if (character === 44) {
        // code '44' is for comma sign ','
        segments.push(text_1.text.substring(startCounter + 1, idx));
        startCounter = Number(idx) + 1;
        console.log(`startCounter - ${startCounter} and idx - ${idx}`);
    }
}
segments.push(text_1.text.substring(startCounter + 1));
console.log(segments);
