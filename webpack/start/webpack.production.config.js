const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    hello: "./src/hello.js",
    adrian: "./src/adrian.js"
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 32 * 1024 // If file is greater than 32 kilobytes, webpack will treat it as asset/resource
          }
        }
      },
      {
        test: /\.txt/,
        type: "asset/source"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HTMLWebpackPlugin({
      filename: "hello.html",
      chunks: ["hello"],
      title: "HelloWorld App",
      template: "src/page-template.hbs",
      description: "Hello Warld Page",
      minify: false
    }),
    new HTMLWebpackPlugin({
      filename: "adrian.html",
      chunks: ["adrian"],
      title: "Adrian App",
      template: "src/page-template.hbs",
      description: "Adrian Page",
      minify: false
    })
  ]
};
