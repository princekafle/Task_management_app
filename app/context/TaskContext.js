"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the API
  useEffect(() => {
    fetchTasks();
  }, []);
  const fetchTasks = (status = "all") => {
    fetch(`http://localhost:3000/api/tasks/[id]?status=${status}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  const addTask = (task) => {
    fetch("http://localhost:3000/api/tasks/[id]", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
    
      .then((response) =>  response.json())
     
      .then((newTask) => {
        setTasks((prev) => [...prev, newTask]);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const updateTask = (id, updatedFields) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        setTasks((prev) => prev.map((task) => (task._id === id ? updatedTask : task)));
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  };

  const deleteTask = (id) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    
      // body: JSON.stringify({ id, confirm: true }), // Send the id and confirm field 

    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete task");
      }
      // Remove the deleted task from the state if successful
      setTasks((prev) => prev.filter((task) => task._id !== id));
    })
    .catch((error) => {
      console.error("Error deleting task:", error);
    });
};

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider };
