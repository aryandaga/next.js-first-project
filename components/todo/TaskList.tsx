import React from "react";
import { TodoObject } from "@/types";

interface TaskListProps {
  tasks: TodoObject[];
  onToggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggleTask(task.id)}
            />
            {task.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
