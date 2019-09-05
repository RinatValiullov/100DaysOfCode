let fs = require('fs');

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (error, data) => {
            if(error) {
                return reject(error);
            }

            resolve(data);
        })
    });
};

Promise.all([
    stats('file1'),
    stats('file2'),
    stats('file3')
])
.then((data) => console.log(data))
.catch((error) => console.log(error))

