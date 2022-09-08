const catchAsyncError = require("../middleware/catchAsycnError");
const ErrorHander = require("../utils/errorhander");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// User Register
exports.register = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHander("Please fill all the required fields", 400));
  }
  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});

// User Login
exports.login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Account doesnt exist", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }
  
  sendToken(user, 200, res);
});

// User Logout
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


  

