const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("<h2>dddddd 20!!</h2>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
