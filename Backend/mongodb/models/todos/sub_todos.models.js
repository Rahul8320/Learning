// import mongoose
import mongoose from "mongoose";

// create the schema
const subTodoSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

// create the model
export const SubTodo = mongoose.model("SubTodos", subTodoSchema);
