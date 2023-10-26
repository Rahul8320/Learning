// import mongoose
import mongoose from "mongoose";

// create the schema
const todoSchema = new mongoose.Schema({});

// export the model
export const Todo = mongoose.model("Todos", todoSchema);