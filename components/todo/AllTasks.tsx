import React from "react";
import { TodoObject } from "@/types"; // Update the import path

interface AllTasksProps {
  tasks: TodoObject[];
}

const AllTasks: React.FC<AllTasksProps> = ({ tasks }) => {
  return (
    <div>
      <h2>All Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
