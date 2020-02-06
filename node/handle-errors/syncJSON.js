const fs = require('fs');

const readJSONsync = fileName => JSON.parse(fs.readFileSync(fileName, 'utf8'));

// Let's make an error artificially: typo in fileName
const fileName = 'data.jso';

const result = readJSONsync(fileName);

console.log(result);
