const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const predictClassification = require("../services/inference");
const { getPublicUrl, uploadImage, bucket } = require("../config/storage");
const {
  getArrayJsonPrediction,
} = require("../services/buildPredictionResponse");

const prisma = new PrismaClient();

const getPredictionsByUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const predictions = await prisma.prediction.findMany({
      where: {
        userId: req.params.userId,
      },
    });

    const data = await Promise.all(
      predictions.map(async (prediction) => {
        const disease = await prisma.disease.findUnique({
          where: {
            id: prediction.diseaseId,
          },
        });
        return getArrayJsonPrediction({ prediction, disease });
      })
    );
    res.status(200).json({
      success: true,
      message: "Fetching all predictions was successfully",
      data: data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching predictions" });
  }
};

const postPredictHandler = async (req, res) => {
  try {
    const image = req.file.buffer;
    const imageName = uuidv4() + path.extname(req.file.originalname);
    const imageUrl = getPublicUrl(imageName, "predictions");

    const model = req.app.get("model");

    const { confidenceScore, disease } = await predictClassification(
      model,
      image
    );

    const makePrediction = {
      label: disease.label,
      confidenceScore: confidenceScore,
    };

    if (req.params.userId) {
      const user = await prisma.user.findUnique({
        where: {
          id: req.params.userId,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
    }

    const prediction = await prisma.prediction.create({
      data: {
        userId: req?.params?.userId,
        diseaseId: disease.id,
        confidenceScore: makePrediction.confidenceScore,
        image: imageUrl,
      },
    });

    // await uploadDiseaseImage(bucket, req.file.originalname, req.file.buffer);
    await uploadImage({
      bucket: bucket,
      filename: imageName,
      imageBuffer: req.file.buffer,
      folder: "predictions",
      contentType: req.file.contentType,
    });

    const response = res.status(201).json({
      success: true,
      message: "Model is predicted successfully",
      // prediction: data,
      // disease: disease,
      data: getArrayJsonPrediction({ prediction, disease }),
    });
    return response;
  } catch (error) {
    const response = res.status(413).json({
      success: false,
      message: "Model is failed to predicted",
      error: error.message,
    });
    return response;
  }
};

module.exports = {
  getPredictionsByUser,
  postPredictHandler,
};
