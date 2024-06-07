require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(router);

app.use('/', express.static(path.join(__dirname, '../docs')));


app.listen(PORT, HOST, () => {
  console.log(`Listening on host ${HOST} port ${PORT}`);
});
