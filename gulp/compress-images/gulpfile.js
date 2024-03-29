const { src, dest, series, parallel, watch } = require("gulp");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");
const cleancss = require("gulp-clean-css");
const autoPrefixer = require("gulp-autoprefixer");
const compress = require("compress-images");
const del = require("del");

function serve(cb) {
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

/* compress images with "gulp-imagemin" */
async function imagesImagemin() {
  // https://github.com/imagemin/imagemin/issues/392#issuecomment-916160758
  imagemin = (await import("gulp-imagemin")).default;
  return src("./src/assets/**/*")
    .pipe(imagemin())
    .pipe(dest("./src/dist/images/"));
}

/* compress images with "compress-images" */
async function imagesCompress() {
  compress(
    "./src/assets/**/*",
    "./src/dist/images/",
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "75"] } },
    { png: { engine: false, command: false } },
    { svg: { engine: false, command: false } },
    { gif: { engine: false, command: false } },
    function (err, completed) {
      if (completed === true) {
        browserSync.reload();
      }
    }
  );
}

/* delete all compressed images */
function cleanImages() {
  return del("./src/dist/images/**/*", { force: true });
}

/* build project in separate folder */
function buildCopy() {
  return src(
    [
      "src/dist/css/**/*.min.css",
      "src/dist/js/**/*.min.js",
      "src/dist/images/**/*",
      "src/**/*.html"
    ],
    { base: "./" }
  ).pipe(dest("build/"));
}

/* clean build folder */
function cleanBuild() {
  return del("./build/**/*", { force: true });
}

/* Watch scripts, styles, html */
function startWatch() {
  watch("./src/scripts/**/*.js", scripts);
  watch(["./src/styles/**/*"], styles);
  watch("./src/**/*.html").on("change", browserSync.reload);
  watch("./src/assets/**/*", imagesCompress);
}

exports.serve = serve;
exports.styles = styles;
exports.scripts = scripts;
exports.imagesImagemin = imagesImagemin;
exports.imagesCompress = imagesCompress;
exports.cleanImages = cleanImages;
exports.cleanBuild = cleanBuild;
exports.build = series(cleanBuild, styles, scripts, imagesCompress, buildCopy);
exports.default = parallel(styles, scripts, serve, startWatch);
