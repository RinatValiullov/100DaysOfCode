const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");

const views = () => {
  return src("./src/**/*.pug", { ignore: "src/includes/**/*.pug" })
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest("./dist/html"));
};

exports.default = () => {
  watch("./src/**/*.pug", series(views));
};
