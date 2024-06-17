import DefaultLayout from "@/layouts/default";
import { Checkbox } from "@nextui-org/checkbox";
import { Button, Card } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { TodoObject } from "@/types";
import {
  fetchTodos,
  addTodo as addTodoAPI,
  updateTodo as updateTodoAPI,
  deleteTodo as deleteTodoAPI,
} from "@/pages/api/api";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "@/firebase/config";

// export function dashbaord() {

// }

const TestPage: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>(""); // We are making sure this is a string.
  const [todos, setTodos] = useState<TodoObject[]>([]); // Fetching multiple todos and storing them
  const [editId, setEditId] = useState<number | null>(null); // To track which todo is being edited.

  useEffect(() => {
    const fetchInitialTodos = async () => {
      const allTodos = await fetchTodos();
      const limitedTodos = allTodos.slice(0, 20); // first 20 todos
      setTodos(limitedTodos);
    };

    fetchInitialTodos();
  }, []);

  const addTodo = async () => {
    if (editId) {
      // update existing todo if not null
      const updatedTodo = await updateTodoAPI(editId, {
        userId: 1,
        value: todo,
        done: false,
      });
      setTodos(todos.map((t) => (t.id === editId ? updatedTodo : t)));
      setEditId(null);
    } else {
      // add new since null
      const newTodo = await addTodoAPI({ userId: 1, value: todo, done: false });
      setTodos([newTodo, ...todos]);
      console.log("Todo added", todos.length);
    }
    setTodo("");
  };

  const deleteTodo = async (id: number) => {
    await deleteTodoAPI(id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id: number, value: string) => {
    setTodo(value);
    setEditId(id);
  };

  const toggleTodoStatus = async (id: number) => {
    const todoToUpdate = todos.find((t) => t.id === id);
    if (todoToUpdate) {
      const updatedTodo = await updateTodoAPI(id, {
        ...todoToUpdate,
        done: !todoToUpdate.done,
      });
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    }
  };

  const incompleteTodos = todos.filter((todo) => !todo.done);
  const completeTodos = todos.filter((todo) => todo.done);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/firebase/login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

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
                <div className="p-1 border-1 border-grey rounded-2xl">
                  <div className="font-sans text-2xl flex justify-center items-center text-white mb-5">
                    All Tasks
                  </div>
                  <ul id="todo-list" className="mt-5">
                    {todos.map((todo) => (
                      <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 border-1 rounded-2xl mb-2 text-white font-sans"
                      >
                        <Checkbox
                          isSelected={todo.done}
                          onValueChange={() => toggleTodoStatus(todo.id)}
                          id={`task-${todo.id}`}
                          className="text-white font-sans"
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
                <div className="p-1 border-1 border-grey rounded-2xl">
                  <div className="font-sans text-2xl flex justify-center items-center text-white mb-5">
                    Incomplete Tasks
                  </div>
                  <ul id="todo-list" className="mt-5">
                    {incompleteTodos.map((todo) => (
                      <li
                        key={todo.id}
                        className="flex justify-between items-center p-2 border-1 rounded-2xl mb-2 text-white font-sans"
                      >
                        <Checkbox
                          isSelected={todo.done}
                          onValueChange={() => toggleTodoStatus(todo.id)}
                          id={`task-${todo.id}`}
                          className="text-white font-sans"
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
                <div className="p-1 border-1 border-grey rounded-2xl">
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
                          className="text-white font-sans"
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
        <div className="flex justify-center items-center w-full p-5">
          {/* <Button
            id="button-logout"
            className="text-black font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            onClick={handleLogout}
          >
            Logout
          </Button> */}
        </div>
      </DefaultLayout>
    </>
  );
};

export default TestPage;
