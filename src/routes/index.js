// file: src/routes/index.js

const express = require("express");
const { uploadMiddleware } = require("../middleware/multer");

const router = express.Router();

const firebaseAuthController = require("../controllers/firebase-auth-controller");
const {
  postPredictHandler,
  getPredictionsByUser,
} = require("../controllers/prediction");
const { getUsers, storeUser } = require("../controllers/user");
const { getDiseases } = require("../controllers/disease");

// router.post("/api/upload-file", uploadMiddleware, uploadImage);

router.post("/api/register", firebaseAuthController.registerUser);
router.post("/api/login", firebaseAuthController.loginUser);
router.post("/api/logout", firebaseAuthController.logoutUser);

router.get("/api/users", getUsers);
router.post("/api/users", storeUser);

router.post("/api/predict/:userId", uploadMiddleware, postPredictHandler);
router.get("/api/predictions/:userId", getPredictionsByUser);

router.get("/api/diseases", getDiseases);

module.exports = router;
