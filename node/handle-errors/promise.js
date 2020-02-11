const fs = require('fs');
const path = require('path');

const readFile = (fileName, enc) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, enc, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const readJSON = fileName => {
  return readFile(fileName, 'utf8')
    .then(result =>
      JSON.parse(result, (key, value) =>
        console.log(`key: ${key}\nvalue: ${value}`)
      )
    )
    .catch(error => console.error(error));
};

// Let's make an error artificially: typo in fileName
const fileName = `data.jso`;

/*
//If we load script from root repo directory
const fileName = `${path.resolve(__dirname)}\\data.json`;
*/

const result = readJSON(fileName);

result.then(console.log);

/*
 *
 * Doesn't conflate input with output ✓
 *
 * Doesn't work with control flow primitives ✕
 *
 * Requires extrta work to handle errors ✕
 *
 */
