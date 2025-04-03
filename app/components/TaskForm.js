"use client";
import { useState } from "react";
import { TaskContext } from "@/app/context/TaskContext.js";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
  });

  const handleChange = (e) => setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, completed: false });
    setTask({ title: "", description: "", dueDate: "", priority: "" });
  };

  const router = useRouter();

  return (
    
    <form
      onSubmit={(e) => {
        handleSubmit(e);
        router.push("/tasklist");
      }}
      className="p-4 border rounded-lg space-y-2"
    >
      Task Title : <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="w-full p-2 border rounded"
        required
      />
      Task Description:<textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
        className="w-full p-2 border rounded"
      />
      Task Due Date: <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      Task priority: <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
