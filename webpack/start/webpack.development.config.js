const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 4327,
    static: {
      directory: path.resolve(__dirname, "./dist")
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true
    }
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new HTMLWebpackPlugin({
      title: "HelloWorld App",
      template: "src/index.hbs",
      description: "Learn webpack basics"
    })
  ]
};
