const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDiseases = async (req, res) => {
  try {
    const diseases = await prisma.disease.findMany();
    return res.status(200).json({
      success: true,
      message: "Fetching all diseases was successfully",
      data: diseases,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `Error fetching diseases: ${error} ` });
  }
};

module.exports = {
  getDiseases,
};
