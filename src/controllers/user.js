const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      message: "Fetching all user was successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: `Error fetching users: ${error} ` });
  }
};

const storeUser = async (req, res) => {
  try {
    const user = await req.body;
    console.log(user);
    await prisma.user.create({
      data: {
        id: user.id,
        name: user.name,
        identifier: user.identifier,
      },
    });
    return res.status(200).json({
      success: true,
      message: "Success to store user",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error to store users. Please check again the attributes",
    });
  }
};

module.exports = {
  getUsers,
  storeUser,
};
