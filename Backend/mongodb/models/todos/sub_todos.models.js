// import mongoose
import mongoose from "mongoose";

// create the schema
const subTodoSchema = new mongoose.Schema({});

// create the model
export const SubTodo = mongoose.model("SubTodos", subTodoSchema);