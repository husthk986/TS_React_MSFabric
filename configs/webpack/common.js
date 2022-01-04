// shared config (dev and prod)
const { resolve } = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const variables = require("./buildVariables.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          tsConfigFile: "./tsconfig.json",
          failOnHint: true,
          formatter: "stylish"
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              singleton: true
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=" +
          variables.buildNumber +
          "/img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: "../tsconfig.json",
      watch: ["./"],
      useTypescriptIncrementalApi: true
    }),
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: "../src/index.html"
    })
  ],
  performance: {
    hints: false
  }
};
