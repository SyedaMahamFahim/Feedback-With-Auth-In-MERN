const mongoose = require("mongoose");

const fitnessProgramModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Program name is required"],
  },
  exercises: [ {
    type: mongoose.Schema.ObjectId,
    ref: "Exercise",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("FitnessProgram", fitnessProgramModel);




