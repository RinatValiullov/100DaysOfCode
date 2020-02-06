const fs = require('fs');

const readJSON = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', function(error, result) {
    if (error) {
      return callback(error);
    }
    try {
      result = JSON.parse(result);
    } catch (exept) {
      callback(exept);
    }
    callback.call(null, result);
  });
};

// Let's make an error artificially: typo in fileName
const fileName = 'data.jso';

const showArg = arg => console.log(arg);

const resultJSON = readJSON(fileName, showArg);

console.log(resultJSON);

/*
 *
 * Conflates the input with the output ✕
 *
 * Doesn't work with control flow primitives ✕
 *
 * Handles errors in JSON.parse ✓
 *
 * Double handles errors in the callback ✕
 *
 */
