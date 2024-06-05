const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const predictClassification = async (model, image) => {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([416, 416])
      .expandDims()
      .toFloat();

    const prediction = await model.predict(tensor);
    const score = await prediction.data();
    console.log(score);

    const confidenceScore = Math.max(...score) * 100;

    const classes = ["Cacar Air", "Eczhema", "Jamur Kuku", "Jerawat", "Kurap"];

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];
    let suggestion;

    if (label === "Cacar Air") {
      suggestion = "ini cacar air";
    } else if (label === "Eczhema") {
      suggestion = "ini eczema";
    } else if (label === "Jamur Kuku") {
      suggestion = "ini jamur kuku";
    } else if (label === "Jerawat") {
      suggestion = "ini jerawat";
    } else if (label === "Kurap") {
      suggestion = "ini kurap";
    }
    return { confidenceScore, label, suggestion };
  } catch (error) {
    throw new InputError(`Terjadi kesalahan dalam melakukan prediksi`);
  }
};

module.exports = predictClassification;
