"use client";
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext"; 


const TaskList = () => {
    const { tasks, updateTask, deleteTask } = useContext(TaskContext);
    const [filter, setFilter] = useState("All");

    const handleDelete = (id) => {
        deleteTask(id);
        
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "Completed") return task.completed;
        if (filter === "Pending") return !task.completed;
        return true; // "All"
    });

    return (
     
        <div className="space-y-4">
            <div className="flex gap-4 mb-4 ml-5 mt-5">
           
                {["All", "Completed", "Pending"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded transition ${
                            filter === type ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Task List */}
            {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                    <div key={task._id} className="p-4 ml-5 mb-5 mr-3 border rounded-lg flex justify-between items-center">
                        <div>
                            <h3 className={`text-lg ${task.completed ? "line-through text-gray-500" : "text-black"}`}>
                                {task.title}
                            </h3>
                            <p>{task.description}</p>
                            <p className="text-sm text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => updateTask(task._id, { completed: !task.completed })}
                                className={`px-3 py-1 rounded ${
                                    task.completed ? "bg-gray-400" : "bg-green-500 text-white"
                                }`}
                            >
                                {task.completed ? "Undo" : "Complete"}
                            </button>
                            <button
                                onClick={() => handleDelete(task._id)}
                                className="px-3 py-1 bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-center">No {filter.toLowerCase()} tasks available.</p>
            )}
        </div>
    );
};

export default TaskList;
