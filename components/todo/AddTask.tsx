import React, { useState } from "react";

interface AddTaskProps {
  onAddTask: (taskValue: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleAddTask = () => {
    if (taskValue.trim()) {
      onAddTask(taskValue);
      setTaskValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        placeholder="Add new task"
        className="w-full px-4 py-2 mb-4 rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddTask}
        className="w-full text-black font-bold bg-blue-500 hover:bg-blue-700"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
