const getArrayJsonPrediction = ({ prediction, disease }) => {
  return {
    id: prediction.id,
    userId: prediction.userId,
    name: disease.name,
    label: disease.label,
    latinName: disease.latinName,
    uploadedImage: prediction.image,
    skinDiseaseImage: disease.image,
    confidenceScore: prediction.confidenceScore,
    description: disease.description,
    cause: disease.cause,
    symptom: disease.symptom,
    treatment: disease.treatment,
    createdAt: prediction.createdAt,
    updatedAt: prediction.updatedAt,
  };
};

module.exports = {
  getArrayJsonPrediction,
};
