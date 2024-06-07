import DefaultLayout from "@/layouts/default";
import { Checkbox } from "@nextui-org/checkbox";
import { Button, Card, CardHeader } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import { TodoObject } from "./Models/Todo";

// next line is to tell react that this is a functional component.
const TestPage: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>(""); // We are making sure this is a string.
  const [todos, setTodos] = useState<TodoObject[]>([]); // Fetching multiple todos and storing them
  const [editId, setEditId] = useState<number | null>(null); // To track which todo is being edited.

  const addTodo = () => {
    if (editId) {
      // If editId is not null, update the existing todo
      setTodos(todos.map((t) => (t.id === editId ? { ...t, value: todo } : t)));
      setEditId(null);
    } else {
      // Otherwise, add a new todo
      setTodos([
        { userId: 1, id: Date.now(), value: todo, done: false },
        ...todos,
      ]);
    }
    setTodo("");
    // console.log("setTodos", todos[0].id);
  };
  //   const logTest = () => {
  //     console.log("setTodos", setTodos);
  //   };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const checkTodo = () => {
    // console.log("setTodos", todos.length);
  };

  const editTodo = (id: number, value: string) => {
    setTodo(value);
    setEditId(id);
  };

  const toggleTodoStatus = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const incompleteTodos = todos.filter((todo) => !todo.done);
  const completeTodos = todos.filter((todo) => todo.done);

  return (
    <>
      <DefaultLayout>
        <div className="justify-center items-center flex flex-col w-[100%] text-black font-sans todo-list ">
          <div className="p-5 text-4xl text-white font-sans">TO DO LIST</div>
          <div className="flex justify-center items-center w-full p-5">
            <title>Task</title>
            <input
              type="text"
              placeholder="Enter task to do"
              className="w-[50%] px-4 py-2 mr-2 rounded-xl border-gray-300 focus:outline-none focus:lue-500 text-white"
              onChange={(e) => setTodo(e.target.value)} // Now value can only set strings as value here.
              value={todo}
            />
            <Button
              id="button-addTask"
              className="text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
              onClick={() => addTodo()}
            >
              {editId ? "Update Task" : "Add Task"}
            </Button>
            {/* <Button onClick={() => checkTodo()}>Check</Button> */}
          </div>
          {todos.length != 0 ? (
            <Card className="w-full bg-black">
              {/* <CardHeader>Header</CardHeader> */}
              <div className="grid grid-cols-3 gap-4 w-full p-3 max-md:grid-cols-1">
                <div className="p-1 border-1 rounded-2xl">
                  <div className="font-bold text-2xl flex justify-center items-center text-white mb-5">
                    All Tasks
                  </div>
                  <ul id="todo-list" className="mt-5">
                    {todos.map((todo) => (
                      <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 border-1 rounded-2xl mb-2 text-white"
                      >
                        <Checkbox
                          isSelected={todo.done}
                          onValueChange={() => toggleTodoStatus(todo.id)}
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
                <div className="p-1 border-1 rounded-2xl">
                  <div className="font-bold text-2xl flex justify-center items-center text-white mb-5">
                    Incomplete Tasks
                  </div>
                  <ul id="todo-list" className="mt-5">
                    {incompleteTodos.map((todo) => (
                      <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 border-1 rounded-2xl mb-2 text-white"
                      >
                        <Checkbox
                          isSelected={todo.done}
                          onValueChange={() => toggleTodoStatus(todo.id)}
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
                <div className="p-1 border-1 rounded-2xl">
                  <div className="font-bold text-2xl flex justify-center items-center text-white mb-5">
                    Complete Tasks
                  </div>
                  <ul id="todo-list" className="mt-5">
                    {completeTodos.map((todo) => (
                      <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 border-1 rounded-2xl mb-2 text-white"
                      >
                        <Checkbox
                          isSelected={todo.done}
                          onValueChange={() => toggleTodoStatus(todo.id)}
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
            </Card>
          ) : (
            <div className="text-white">No tasks to display</div>
          )}
        </div>
      </DefaultLayout>
    </>
  );
};

export default TestPage;
