require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
const router = require("./routes");
const loadModel = require("./services/loadModel");
const model = async () => await loadModel();
app.set("model", model);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST, () => {
  console.log(`Listening on host ${HOST} port ${PORT}`);
});
