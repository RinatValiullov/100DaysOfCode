let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

// compile scss into css
function sass_compile() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.scss', sass_compile)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
}

exports.sass_compile = sass_compile
exports.watch = watch;
