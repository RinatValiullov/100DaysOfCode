const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/schedule.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
