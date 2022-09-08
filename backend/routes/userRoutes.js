const express = require("express");
const router = express.Router();
const { register
,login,
logout
 } = require("../controllers/userController");

 const { isAuthenticatedUser} = require("../middleware/auth");


// For Users
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isAuthenticatedUser,logout);

module.exports = router;
