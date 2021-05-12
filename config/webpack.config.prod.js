const Dotenv = require("dotenv-webpack");
const path = require("path");

const paths = require("./paths");

module.exports = () => {
  return {
    mode: "production",
    entry: paths.entrypoint,
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        "@": path.resolve(paths.root, "src"),
      },
    },
    output: {
      filename: "[name].bundler.js",
      path: paths.dist,
      clean: true,
      publicPath: "/dist/",
    },
    module: {
      rules: [
        {
          use: "ts-loader",
          exclude: /node_modules/,
          test: /(ts)x?$/,
        },
      ],
    },

    plugins: [
      new Dotenv({
        path: paths.dotenv,
      }),
    ],
  };
};
