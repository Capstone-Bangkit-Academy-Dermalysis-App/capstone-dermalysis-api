const uploadImage = async (req, res) => {
  return res
    .status(200)
    .json({
      status: "success",
      message: "File uploaded successfully",
      payload: req.file,
    });
};

module.exports = { uploadImage };
