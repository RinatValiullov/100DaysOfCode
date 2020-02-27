const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

/*
const createDirectory = dirPath => {
    fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
        if(error) {
            console.error(error.message);
        } else {
            console.log('Done');
        }
    });
};

const dir = path.dirname(__filename);

fs.mkdirSync(`${dir}\\dist`);
*/

const buildProjects = dir => {
  const files = fs.readdirSync(dir);

  for (const i in files) {
    const name = dir + '/' + files[i];
    if (
      fs.statSync(name).isDirectory() &&
      name !== './dist' &&
      name !== './node_modules'
    ) {
      fs.mkdirSync(`${name}/dist`);
      console.log(`${name}`);
      exec(
        `tsc -b && mv dist/${name}/src/*.js ${name}/dist/`,
        (err, stdout, stderr) => {
          if (err) {
            console.error(err.message);
            return;
          }

          console.log(`${name} ${stdout || ' - OK'}`);
        }
      );
    }
  }
};

buildProjects('.');
