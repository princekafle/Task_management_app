# Task Management App

This is a Task Management application built with **Next.js** and **React** for the frontend, and **MongoDB** for the database. In this app, users can create tasks, view all tasks, filter tasks by their status (completed, pending, or all), and update or delete tasks. The application uses **MongoDB Atlas** for production and **MongoDB Compass** for local development.

## Features

- **Create Tasks**: Add tasks with a **title**, **description**, **due date**, and **priority** (high, medium, low).
- **View Tasks**: See a list of all tasks, with task details visible.
- **Filter Tasks**: Filter tasks by their status: 
  - Completed
  - Pending
  - All tasks
- **Mark Tasks as Completed**: Mark a task as completed by clicking the "Completed" button.
- **Delete Tasks**: Delete tasks that are no longer needed.

## Tech Stack

- **Frontend**: 
  - Next.js
  - React
- **Backend**: 
  - MongoDB (using Mongoose for database interaction)
  - MongoDB Atlas (for production)
  - MongoDB Compass (for local development)
  
## Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-princekafle/task-management-app.git
cd task-management-app
