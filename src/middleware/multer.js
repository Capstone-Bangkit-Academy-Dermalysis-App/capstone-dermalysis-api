const multer = require("multer");
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error(
      "Invalid file type. Only JPEG, PNG and GIF are allowed."
    );
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({
  dest: "uploads/",
  fileFilter: fileFilter,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  storage: storage,
}).single("file");

const uploadMiddleware = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({
          success: false,
          message: "File size should be less than 1MB.",
        });
      }
      if (err.code === "LIMIT_FILE_TYPES") {
        return res.status(400).json({
          success: false,
          message: "Invalid file type. Only JPEG, PNG and GIF are allowed.",
        });
      }
      // Error lainnya
      return res.status(500).json({
        success: false,
        message: "Error uploading file.",
        error: err.message,
      });
    }
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a file.",
      });
    }
    next();
  });
};

module.exports = { uploadMiddleware };
