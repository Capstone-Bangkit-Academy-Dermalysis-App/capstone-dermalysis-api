const tf = require("@tensorflow/tfjs-node");
const modelPath = "../../model/model.json";
const path = require("path");

// const loadModel = async () => await tf.loadLayersModel(process.env.MODEL_URL);
const loadModel = async () =>
  await tf.loadLayersModel("file://model/model.json");

module.exports = loadModel;
