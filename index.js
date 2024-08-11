

const express = require("express");
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require("./config");
const app = express();
const router = require("./routers/routes")
const port = 5000;

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
  .then(() => console.log('Connected!'));

app.use(express.json())

app.get("/", (req, res) => {
  res.send("<h2>!sss>");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



app.use("/api", router);