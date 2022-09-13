const mongoose = require("mongoose");

const exerciseModel= mongoose.Schema({
  name: {
    type: String,
    required: [true, "Exercise name is required"],
  },
  length: {
    type: Number,
    required: [true, "Minutes is required"],
  },
  cover_image: {
    type: String,
  },
  public_id: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Exercise", exerciseModel);




