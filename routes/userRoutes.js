const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  userProfile,
} = require("../controllers/userController");

const { isAuthenticatedUser } = require("../middleware/auth");

// For Users
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticatedUser, userProfile);

module.exports = router;
