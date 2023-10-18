var mongoose = require("mongoose");

// Setup schema
var studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  rollNo: {
    type: Number,
    required: true,
  },
  image: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

studentSchema.pre("save", function (next) {
  this.updated_at = Date.now(); // update the date every time a Student data is saved
  next();
});

// Export Student model
module.exports = mongoose.model("Student", studentSchema);
