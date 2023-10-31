// import mongoose
import mongoose from "mongoose";

// create the schema
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodos",
      },
    ], // array of sub-todos
  },
  { timestamps: true }
);

// export the model
export const Todo = mongoose.model("Todos", todoSchema);
