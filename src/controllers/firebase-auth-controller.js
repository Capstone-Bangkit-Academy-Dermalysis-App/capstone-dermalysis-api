const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
} = require("../config/firebase");

const auth = getAuth();

class FirebaseAuthController {
  registerUser(req, res) {
    console.log(req);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        email: "Email is required",
        password: "Password is required",
      });
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            res.status(201).json({
              success: true,
              message: "Verification email sent! User created successfully!",
              data: [userCredential],
            });
          })
          .catch((error) => {
            console.error(error);
            res.status(500).json({
              success: false,
              message: "Error sending email verification",
            });
          });
      })
      .catch((error) => {
        const errorMessage =
          error.message || "An error occurred while registering user";
        res.status(500).json({ success: false, message: errorMessage });
      });
  }
  loginUser(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        success: false,
        message: "Email and Password are required",
      });
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const idToken = userCredential._tokenResponse.idToken;
        if (idToken) {
          res.cookie("access_token", idToken, {
            httpOnly: true,
          });
          res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: [userCredential],
          });
        } else {
          res
            .status(500)
            .json({ success: false, message: "Internal Server Error" });
        }
      })
      .catch((error) => {
        console.error(error);
        const errorMessage =
          error.message || "An error occurred while logging in";
        res.status(500).json({ success: false, message: errorMessage });
      });
  }
  logoutUser(req, res) {
    if (!req.cookies.access_token) {
      return res
        .status(400)
        .json({ success: false, message: "Access token is missing" });
    }
    signOut(auth)
      .then(() => {
        res.clearCookie("access_token");
        res
          .status(200)
          .json({ success: true, message: "User logged out successfully" });
      })
      .catch((error) => {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      });
  }
  resetPassword(req, res) {
    const { email } = req.body;
    if (!email) {
      return res.status(422).json({
        success: false,
        message: "Email is required",
      });
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        res
          .status(200)
          .json({ success: true, message: "Password reset email sent successfully!" });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      });
  }
}

module.exports = new FirebaseAuthController();
