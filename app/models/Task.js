// models/Task.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  priority: { type: String, enum: ["High", "Medium", "Low"], required: true },
  completed: { type: Boolean, default: false },
  createdAt: {type: Date, default: Date.now()}
});


const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;
