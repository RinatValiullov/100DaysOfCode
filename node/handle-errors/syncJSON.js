const fs = require('fs');

const readJSONsync = fileName => JSON.parse(fs.readFileSync(fileName, 'utf8'));

const fileName = 'data.jso';

const result = readJSONsync(fileName);

console.log(result);
