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

  try {
    const model = await loadModel();
    app.set("model", model);
  } catch (error) {
    console.error("Error loading model:", error);
    // Anda dapat menentukan tindakan apa yang ingin Anda lakukan jika terjadi kesalahan saat memuat model,
    // seperti menggunakan model cadangan atau memberikan respons yang sesuai kepada pengguna.
  }

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
