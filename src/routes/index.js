// file: src/routes/index.js

const express = require("express");
const { uploadMiddleware } = require("../middleware/multer");
const bodyParser = require("body-parser");
const firebaseAuthController = require("../controllers/firebase-auth-controller");
const {
  postPredictHandler,
  getPredictionsByUser,
} = require("../controllers/prediction");
const { getUsers, storeUser } = require("../controllers/user");
const { getDiseases } = require("../controllers/disease");
const { signature } = require("../middleware/signature");

const router = express.Router();
router.use(bodyParser.json());
// router.use(signature);

// router.post("/api/upload-file", uploadMiddleware, uploadImage);
router.post("/api/register", firebaseAuthController.registerUser);
router.post("/api/login", firebaseAuthController.loginUser);
router.post("/api/logout", firebaseAuthController.logoutUser);
router.post("/api/reset-password", firebaseAuthController.resetPassword);

router.get("/api/users", getUsers);
router.post("/api/users", storeUser);

router.post("/api/predict/:userId", uploadMiddleware, postPredictHandler);
// router.post("/api/predict", uploadMiddleware, postPredictHandler);
router.get("/api/predictions/:userId", getPredictionsByUser);

router.get("/api/diseases", getDiseases);
module.exports = router;
