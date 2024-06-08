// file: src/routes/index.js

const express = require("express");
const { uploadMiddleware } = require("../middleware/multer");

const router = express.Router();
const bodyParser = require("body-parser");
const crypto = require("crypto");

const firebaseAuthController = require("../controllers/firebase-auth-controller");
const {
  postPredictHandler,
  getPredictionsByUser,
} = require("../controllers/prediction");
const { getUsers, storeUser } = require("../controllers/user");
const { getDiseases } = require("../controllers/disease");

// Middleware to parse JSON bodies
router.use(bodyParser.json());

// Middleware to validate signature
router.use((req, res, next) => {
  if (req.originalUrl === "/" || req.originalUrl === "/README.md") {
    return next();
  }

  // Get the signature from the request headers
  const signature = req.get("X-Dermalysis-Signature");

  // Get the payload from the request body
  const payload = JSON.stringify(req.body);

  // Your secret token
  const secretToken = "KITAPASTIBISA";

  // Compute the expected signature based on the payload and secret token
  const expectedSignature = crypto
    .createHmac("sha256", secretToken)
    .update(payload)
    .digest("hex");
  // Compare the expected signature with the provided signature
  if (signature && signature === expectedSignature) {
    // Signature is valid, continue processing the request
    next();
  } else {
    // Signature is invalid, return an error response
    res.status(403).json({ error: "Invalid signature" });
  }
});

// router.post("/api/upload-file", uploadMiddleware, uploadImage);

router.post("/api/register", firebaseAuthController.registerUser);
router.post("/api/login", firebaseAuthController.loginUser);
router.post("/api/logout", firebaseAuthController.logoutUser);
router.post("/api/reset-password", firebaseAuthController.resetPassword);

router.get("/api/users", getUsers);
router.post("/api/users", storeUser);

router.post("/api/predict/:userId", uploadMiddleware, postPredictHandler);
router.get("/api/predictions/:userId", getPredictionsByUser);

router.get("/api/diseases", getDiseases);
module.exports = router;
