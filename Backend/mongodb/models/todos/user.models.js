// import mongoose
import mongoose from "mongoose";

// create the schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "You must need to create a password!"],
    },
  },
  { timestamps: true }
);

// export the model
export const User = mongoose.model("Users", userSchema);
