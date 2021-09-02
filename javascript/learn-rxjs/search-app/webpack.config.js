const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  }
};
