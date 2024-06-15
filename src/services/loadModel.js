const tf = require("@tensorflow/tfjs-node");
const modelPath = "../../model/model.json";
const fs = require("fs");

const path = require("path");

// const loadModel = async () =>
//   await tf.loadLayersModel("file://model/model.json");
//
// const loadModel = async () => {
//   const modelJson = fs.readFileSync(path.join(__dirname, modelPath), "utf8");
//   const modelBuffer = Buffer.from(modelJson, "utf8");
//   return await tf.loadLayersModel(tf.io.fromMemory(modelBuffer));
// };
// const loadModel = async () => {
//   const handler = tf.io.fileSystem(path.join(__dirname, modelPath));
//   return await tf.loadLayersModel(handler);
// };
const loadModel = async (app) => {
  try {
    console.log("Starting to load model...");
    console.time("Model Load Time");
    const model = await tf.loadLayersModel("file://model/model.json");
    console.timeEnd("Model Load Time");
    console.log("Model loaded successfully");

    // await fs.writeFileSync("./model.json", model.toJSON());
    // const model = fs.readFileSync("./model.json", "utf8");
    app.set("model", model);
  } catch (error) {
    console.error("Error loading model:", error);
  }
};
module.exports = loadModel;
