const { PrismaClient } = require("@prisma/client");
const path = require("path");
const uploadsPath = path.resolve(__dirname, "../../uploads");

const predictClassification = require("../services/inference");
const prisma = new PrismaClient();

const getPredictions = async (req, res) => {
  try {
    const predictions = await prisma.predictions.findMany();
    res.json(predictions);
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", message: "Error fetching predictions" });
  }
};

const postPredictHandler = async (req, res) => {
  try {
    // const { image } = path.join(uploadsPath, req.image.filename);
    const { image } = req.file;
    const { model } = req.app.get("model");
    const { confidenceScore, label, suggestion } = await predictClassification(
      model,
      image
    );

    const prediction = {
      label: label,
      suggestion: suggestion,
      confidenceScore: confidenceScore,
    };
    const data = await prisma.prediction.create(prediction);

    const response = res.status(201).json({
      status: "success",
      message: "Model is predicted successfully",
      data,
    });
    return response;
  } catch (error) {
    const response = res.status(413).json({
      status: "failed",
      message: "Model is failed to predicted",
    });
    return response;
  }
};

module.exports = {
  getPredictions,
  postPredictHandler,
};
