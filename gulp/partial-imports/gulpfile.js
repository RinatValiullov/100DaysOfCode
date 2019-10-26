let { src, dest, series } = require('gulp'),
  postcss = require('gulp-postcss');

let files = {
  source: './src/',
  dest: './output/',
};

let cssTask = () => {
  return src(files.source + 'main.css')
    .pipe(
      postcss([
        require('postcss-partial-import')({
          prefix: '_',
          extension: '.css',
        }),
      ]),
    )
    .pipe(dest(files.dest));
};

exports.default = series(cssTask);
