let fs = require('fs');

console.info('start reading file...');

fs.readFile('file.md', 'utf-8', function(error, content) {
  if(error) {
    console.log('error happened during reading the file');
    return console.log(error);
  }
  
  console.log(content);
});

console.info('work was finished');
