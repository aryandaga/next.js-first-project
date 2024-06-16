import DefaultLayout from "@/layouts/default";
// import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import { useState } from "react";
import { TodoObject } from "./Models/Todo";

// next line is to tell react that this is a functional component.
const TestPage: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>(""); //we are making sure this is a string.
  const [todos, setTodos] = useState<TodoObject[]>([]); //fetching multiple todos and storing them
  const [editId, setEditId] = useState<string | null>(null); // To track which todo is being edited.
  const addTodo = () => {
    if (editId) {
      // If editId is not null, update the existing todo
      setTodos(todos.map((t) => (t.id === editId ? { ...t, value: todo } : t)));
      setEditId(null);
    } else {
      // Otherwise, add a new todo
      setTodos([
        { id: Date.now().toString(), value: todo, done: false },
        ...todos,
      ]);
    }
    setTodo("");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id: string, value: string) => {
    setTodo(value);
    setEditId(id);
  };
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <DefaultLayout>
        <div className="justify-center items-center flex flex-col w-[100%] text-black font-sans todo-list">
          <div className="p-5 text-4xl text-white font-sans">TO DO LIST</div>
          <div className="flex justify-center items-center w-full p-5">
            <title>Task</title>
            <input
              type="text"
              placeholder="Enter task to do"
              className="w-[50%] px-4 py-2 mr-2 rounded-xl border-gray-300 focus:outline-none focus:lue-500 text-white"
              onChange={(e) => setTodo(e.target.value)} //now value can only set strings as value here.
              value={todo}
            />
            <Button
              id="button-addTask"
              className="text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              onClick={() => addTodo()}
            >
              {editId ? "Update Task" : "Add Task"}
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-3  w-full p-3">
            <div className="p-1 border-1 rounded-2xl">
              <ul id="todo-list" className="mt-5">
                <div className="font-bold text-2xl flex justify-center items-center text-white mb-5">
                  All Tasks
                </div>
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex justify-between items-center p-2 border-1 rounded-2xl mb-2 text-white"
                  >
                    <Checkbox
                      isSelected={isSelected}
                      onValueChange={setIsSelected}
                      id={`task-${todo.id}`}
                      className="font-bold"
                    >
                      {todo.value}
                    </Checkbox>

                    <div className="ml-3 flex">
                      <Button
                        isIconOnly
                        id="button-deleteTask"
                        className="text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mr-1"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        <Image width={24} src="./deleteIcon.svg" />
                      </Button>
                      <Button
                        isIconOnly
                        id="button-editTask"
                        className="text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                        onClick={() => editTodo(todo.id, todo.value)}
                      >
                        <Image width={24} src="./editIcon.svg" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default TestPage;
