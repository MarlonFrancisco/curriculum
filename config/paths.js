const path = require("path");

const paths = () => {
  const root = process.cwd();
  return {
    root,
    entrypoint: path.resolve(root, "src", "main", "index.tsx"),
    dist: path.resolve(root, "public", "dist"),
    public: path.resolve(root, "public"),
    dotenv: path.resolve(
      root,
      "config",
      "env",
      `.env.${process.env.NODE_ENV || "development"}`
    ),
  };
};

module.exports = paths();
