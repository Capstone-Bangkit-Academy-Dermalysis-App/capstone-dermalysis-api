const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} = require("../config/firebase");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const auth = getAuth();

class FirebaseAuthController {
  async registerUser(req, res) {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(422).json({
        success: false,
        message: "Email, password, and name are required.",
      });
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredential.user.uid;

      // Update display name
      try {
        await updateProfile(userCredential.user, { displayName: name });
      } catch (updateError) {
        console.error("Error updating display name:", updateError);
        return res.status(500).json({
          success: false,
          message: "Error updating display name",
        });
      }
      // Check if the email already exists in the database
      const existingUser = await prisma.user.findUnique({
        where: {
          identifier: user.email,
        },
      });

      if (existingUser) {
        // Email exists, response with credentials
        const uid = existingUser.id;
        console.log(`User alrDFeady exists with UID: ${uid}`);
        return res.status(200).json({
          success: true,
          message: "User already exists",
          data: {
            id: uid,
            name: existingUser.name,
            email: existingUser.identifier,
          },
        });
      } else {
        // Store user in Prisma database
        try {
          await prisma.user.create({
            data: {
              id: userId,
              identifier: userCredential.user.email,
              name: name, // Assuming you want to store the name as well
            },
          });
        } catch (prismaError) {
          console.error("Error storing user in database:", prismaError);
          return res.status(500).json({
            success: false,
            message: "Error storing user in database",
          });
        }
      }

      // Send email verification
      try {
        await sendEmailVerification(userCredential.user);
        return res.status(201).json({
          success: true,
          message: "Verification email sent! User created successfully!",
          data: [userCredential],
        });
      } catch (verificationError) {
        console.error("Error sending email verification:", verificationError);
        return res.status(500).json({
          success: false,
          message: "Error sending email verification",
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      const errorMessage =
        error.message || "An error occurred while registering user";
      return res.status(500).json({ success: false, message: errorMessage });
    }
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
        res.status(200).json({
          success: true,
          message: "Password reset email sent successfully!",
        });
      })
      .catch((error) => {
        console.error(error);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      });
  }
}

module.exports = new FirebaseAuthController();
