const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export interface TodoObject {
  userId: number;
  id: number;
  value: string;
  done: boolean;
}


export const fetchTodos = async (): Promise<TodoObject[]> => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.map((todo: any) => ({
    userId: todo.userId,
    id: todo.id,
    value: todo.title,
    done: todo.completed,
  }));
};


export const addTodo = async (todo: Omit<TodoObject, 'id'>): Promise<TodoObject> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: todo.userId,
      title: todo.value,
      completed: todo.done,
    }),
  });
  const data = await response.json();
  console.log(data);
  return {
    userId: data.userId,
    id: data.id,
    value: data.title,
    done: data.completed,
  };
};

// Update todo
export const updateTodo = async (id: number, todo: Partial<TodoObject>): Promise<TodoObject> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: todo.userId,
      title: todo.value,
      completed: todo.done,
    }),
  });
  const data = await response.json();
  return {
    userId: data.userId,
    id: data.id,
    value: data.title,
    done: data.completed,
  };
};

// Delete todo
export const deleteTodo = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};
