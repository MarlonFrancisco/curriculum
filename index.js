const express = require("express");

const app = express();

app.use("/", express.static(`${__dirname}/public`));

app.use("*", (req, res) => {
  res.sendFile(`${__dirname}/public/dist/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening ${port}`);
});
