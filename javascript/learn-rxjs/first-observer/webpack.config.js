"use strict";
const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/main.ts",
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [new htmlPlugin({ title: path.basename(__dirname) })],
  devServer: {
    port: 4327,
    static: {
      directory: path.join(__dirname, "dist"),
      watch: true
    }
  }
};
