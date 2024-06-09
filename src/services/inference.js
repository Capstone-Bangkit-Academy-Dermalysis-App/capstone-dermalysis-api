const tf = require("@tensorflow/tfjs-node");
const InputError = require("../exceptions/InputError");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const predictClassification = async (model, image) => {
  try {
    const tensor = tf.node
      .decodeJpeg(image, 3)
      .resizeBilinear([416, 416])
      .expandDims(0)
      .toFloat()
      .div(tf.scalar(255));
    // console.log(tensor);
    const prediction = await model.predict(tensor);
    // console.log(prediction);
    const score = await prediction.data();
    // console.log(score);

    const confidenceScore = Math.max(...score) * 100;
    const diseases = await prisma.disease.findMany();
    // const classes = ["cacar-air", "jamur-kuku", "jerawat", "kurap", "kutu-air"];
    const classes = diseases.map((value) => value.label);

    const classResult = tf.argMax(prediction, 1).dataSync()[0];
    const label = classes[classResult];

    const disease = await prisma.disease.findFirst({
      where: {
        label: label,
      },
    });

    return { confidenceScore, disease };
  } catch (error) {
    throw new InputError(
      `Terjadi kesalahan dalam melakukan prediksi ${error.message}`
    );
  }
};

module.exports = predictClassification;
