const { src, dest, series, parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const cleancss = require("gulp-clean-css");
const autoPrefixer = require("gulp-autoprefixer");

function bs(cb) {
  browserSync.init({
    server: {
      baseDir: "./src"
    },
    notify: false,
    online: false
  });
}

function styles(cb) {
  return src(["./src/styles/main.css", "./src/styles/reset.css"])
    .pipe(concat("app.min.css"))
    .pipe(
      autoPrefixer({
        overrideBrowserlist: ["last 5 versions"],
        grid: true
      })
    )
    .pipe(
      cleancss({
        level: { 1: { specialComments: 0 } } /*, format: 'beautify' */
      })
    )
    .pipe(dest("./src/dist/css/"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src("./src/scripts/main.js")
    .pipe(concat("main.min.js"))
    .pipe(dest("./src/dist/js/"))
    .pipe(browserSync.stream());
}

async function images() {
  // https://github.com/imagemin/imagemin/issues/392#issuecomment-916160758
  imagemin = (await import("gulp-imagemin")).default;
  return src("./src/assets/**/*")
    .pipe(imagemin())
    .pipe(dest("./src/dist/images/"));
}

function startWatch() {
  watch("./src/scripts/**/*.js", scripts);
  watch(["./src/styles/**/*"], styles);

  watch("./src/**/*.html").on("change", browserSync.reload);
}

exports.images = images;
exports.default = parallel(styles, scripts, bs, startWatch);
