let gulp = require('gulp');
let ts = require('gulp-typescript');
let { watch } = require('gulp');

let tsconfig = {
  'outFile': 'greeting.js'
};

let def = () => 
  gulp.src('src/**/*.ts')
    .pipe(ts(tsconfig))
    .pipe(gulp.dest('built'));

gulp.task('tscompile', def);


exports.default = function() {
  watch(['src/**/*.ts'], def);
};