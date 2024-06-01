const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getPredictions = async (req, res) => {
  try {
    const predictions = await prisma.predictions.findMany();
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching predictions" });
  }
};

module.exports = {
  getPredictions,
};
