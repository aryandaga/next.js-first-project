"use client";
import React, { useState, useEffect } from "react";
import AllTasks from "@/components/todo/AllTasks";
import AddTask from "@/components/todo/AddTask";
import TaskList from "@/components/todo/TaskList";
import { TodoObject } from "@/types";

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<TodoObject[]>([]);

  useEffect(() => {
    // Fetch tasks from the API or initialize with sample data
    const fetchTasks = async () => {
      // Example API call to fetch tasks
      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addTask = (taskValue: string) => {
    const newTask: TodoObject = {
      userId: 1, // example user ID
      id: tasks.length + 1,
      value: taskValue,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl text-white font-sans">Task Manager</h1>
      <div className="w-[90%] max-w-md">
        <AddTask onAddTask={addTask} />
        <AllTasks tasks={tasks} />
        <TaskList tasks={tasks} onToggleTask={toggleTask} />
      </div>
      <footer className="mt-8">
        <p className="text-gray-500">Made by Aryan Daga</p>
      </footer>
    </div>
  );
};

export default HomePage;
