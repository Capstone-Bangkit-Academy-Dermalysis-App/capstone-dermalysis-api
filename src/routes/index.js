// file: src/routes/index.js

const express = require("express");
const { uploadMiddleware } = require("../middleware/multer");

const router = express.Router();

const firebaseAuthController = require("../controllers/firebase-auth-controller");
const { postPredictHandler } = require("../controllers/prediction");
const { getUsers, storeUser } = require("../controllers/user");
const { uploadImage } = require("../controllers/image");

router.get("/api/users", getUsers);
router.post("/api/users", storeUser);
router.post("/api/upload-file", uploadMiddleware, uploadImage);

router.post("/api/register", firebaseAuthController.registerUser);
router.post("/api/login", firebaseAuthController.loginUser);
router.post("/api/logout", firebaseAuthController.logoutUser);
router.post("/api/predict", postPredictHandler);

module.exports = router;
