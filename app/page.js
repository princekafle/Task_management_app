"use client"
import TaskForm from "@/app/components/TaskForm";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
      <main className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Task Management App</h1>
       
        <TaskForm />
        
      </main>
   
  );
}
