const path = require("path");

module.exports = {
  mode: "development",
  watch: true,
  devtool: "eval-cheap-source-map",
  entry: "./src/main.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: "/.tsx?$/",
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
