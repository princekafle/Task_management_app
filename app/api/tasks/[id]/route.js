// app/api/tasks/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Task from "@/app/models/Task";

// Connect to MongoDB
async function connectDB() {
    try {
      const status = await mongoose.connect(process.env.MONGODB_URL);
  
      console.log(`MongoDB connected: ${status.connection.host}`);
    } catch (error) {
      console.log(`DB Error: ${error.message}`);
  
      process.exit(1);
    }
  }

// GET all tasks or filter by status
export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get("status");
  let query = {};
  if (filter === "completed") query.completed = true;
  if (filter === "pending") query.completed = false;
  const tasks = await Task.find(query);
  return NextResponse.json(tasks);
}

// POST a new task
export async function POST(req) {
  await connectDB();
  const { title, description, dueDate, priority, completed } = await req.json();
  const newTask = new Task({ title, description, dueDate, priority, completed });
  await newTask.save();
  return NextResponse.json(newTask);
}

// DELETE a task with confirmation
export async function DELETE(req,context) {
  await connectDB();
  try {
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ error: "Task ID is required" }, { status: 400 });
    }
  
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// UPDATE a task (mark as completed or update details)
export async function PUT(req, context) {
  await connectDB();
  const { id } = await context.params;
  const { title, description, dueDate, priority, completed } = await req.json();
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { title, description, dueDate, priority, completed },
    { new: true }
  );
  return NextResponse.json(updatedTask);
}

