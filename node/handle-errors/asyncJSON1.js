const fs = require('fs');

const readJSON = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', function(error, result) {
    if (error) {
      return callback(error);
    }
    callback.call(null, JSON.parse(result));
  });
};

// Let's make an error artificially: typo in fileName
const fileName = 'data.jso';

const showArg = arg => console.log(arg);

const resultJSON = readJSON(fileName, showArg);

console.log(resultJSON);

/*
 *
 * Conflates the input with the output x
 *
 * Doesn't work with control flow primitives x
 *
 * Doesn't handle errors x
 *
 */
