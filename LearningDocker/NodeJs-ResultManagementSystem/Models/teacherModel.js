var mongoose = require("mongoose");

// Setup schema
var teacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 2048,
  },
  profile_pic: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: Date,
});

teacherSchema.pre("save", function (next) {
  this.updated_at = Date.now(); // update the date every time a user data is saved
  next();
});

// Export Teacher model
module.exports = mongoose.model("Teacher", teacherSchema);
