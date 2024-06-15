require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const loadModel = require("./services/loadModel");
const router = require("./routes");
const path = require("path");
const PORT = 8080;
const HOST = "0.0.0.0";

const startServer = async () => {
  const app = express();
  console.log("ini");

  await loadModel(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(router);

  app.use("/", express.static(path.join(__dirname, "../docs")));

  app.listen(PORT, HOST, () => {
    console.log(`Listening on host ${HOST} port ${PORT}`);
  });
};

startServer();
