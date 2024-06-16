const { PrismaClient } = require("@prisma/client");
const { admin } = require("../config/firebase");
const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      message: "Fetching all user from database was successfully",
      data: users,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Error fetching users: ${error} ` });
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
        identifier: user.email,
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

const updateUserName = async (req, res) => {
  try {
    await prisma.user.update({
      where: {
        id: req.params.userId,
      },
      data: {
        name: req.body.name,
      },
    });

    await admin.auth().updateUser(req.params.userId, {
      displayName: req.body.name,
    });

    return res.status(200).json({
      success: true,
      message: "Success to update user name.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Error to update user name:${error.message} `,
    });
  }
};

module.exports = {
  getUsers,
  storeUser,
  updateUserName,
};
