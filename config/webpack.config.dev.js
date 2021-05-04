const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

const paths = require("./paths");

module.exports = () => {
  return {
    mode: "development",
    entry: paths.entrypoint,
    devtool: "inline-source-map",
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        "@": path.resolve(paths.root, "src"),
      },
    },
    output: {
      filename: "[name]-[fullhash].js",
      path: paths.dist,
      clean: true,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          use: "ts-loader",
          exclude: /node_modules/,
          test: /(ts)x?$/
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(paths.public, "index.ejs"),
      }),
      new Dotenv({
        path: paths.dotenv,
      }),
    ],
    devServer: {
      contentBase: paths.public,
      port: process.env.PORT || 3000,
      hot: true,
    },
  };
};
