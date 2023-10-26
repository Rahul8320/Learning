// import mongoose
import mongoose from "mongoose";

// create the schema
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// export the model
export const Todo = mongoose.model("Todos", todoSchema);
