import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/lib/api/todos';

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function loadTodos() {
    try {
      setErrorMessage('');
      const result = await getTodos();
      setTodos(result?.data ?? []);
    } catch (error) {
      console.error(error);
      setErrorMessage('Could not load todos.');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadTodos();
  }, []);

  async function handleCreateTodo(event) {
    event.preventDefault();

    if (!title.trim()) return;

    try {
      const result = await createTodo(title);
      setTodos((currentTodos) => [...currentTodos, result.data]);
      setTitle('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Could not create todo.');
    }
  }

  async function handleToggleTodo(todo) {
    try {
      const result = await updateTodo(todo.id, {
        completed: !todo.completed,
      });

      setTodos((currentTodos) =>
        currentTodos.map((currentTodo) =>
          currentTodo.id === todo.id ? result.data : currentTodo
        )
      );
    } catch (error) {
      console.error(error);
      setErrorMessage('Could not update todo.');
    }
  }

  async function handleDeleteTodo(id) {
    try {
      await deleteTodo(id);

      setTodos((currentTodos) =>
        currentTodos.filter((currentTodo) => currentTodo.id !== id)
      );
    } catch (error) {
      console.error(error);
      setErrorMessage('Could not delete todo.');
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Todos</h1>
        <button onClick={handleLogout} className="rounded border px-3 py-2">
          Logout
        </button>
      </div>

      <form onSubmit={handleCreateTodo} className="mb-6 flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Add a todo"
          className="flex-1 rounded border px-3 py-2"
        />
        <button type="submit" className="rounded border px-4 py-2">
          Add
        </button>
      </form>

      {errorMessage && <p className="mb-4 text-sm text-red-500">{errorMessage}</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between rounded border p-3"
            >
              <button
                onClick={() => handleToggleTodo(todo)}
                className="text-left"
              >
                <span
                  className={todo.completed ? 'line-through opacity-60' : ''}
                >
                  {todo.title}
                </span>
              </button>

              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="rounded border px-2 py-1"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
