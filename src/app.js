const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";

const app = express();
const router = require("./routes");

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
