/**
 * Custom hook that encapsulates all task-related API logic:
 *  - load tasks from backend
 *  - add task
 *  - toggle completion
 *  - delete task
 *  - clear completed tasks
 */

import { useEffect, useState } from 'react';
import { createTodo, deleteTodo, getTodos, updateTodo } from '@/lib/api/todos';

function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from the backend when the component mounts
  useEffect(() => {
    async function loadTasks() {
      try {
        const result = await getTodos();
        setTasks(result?.data ?? []);
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    }

    loadTasks();
  }, []);

  /**
   * Adds a new task through the backend.
   *
   * @param {string} title - Title of the new task.
   */
  const addTask = async (title) => {
    if (!title) return;

    try {
      const result = await createTodo(title);
      setTasks((prev) => [result.data, ...prev]);
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  /**
   * Toggles a task's completion status through the backend.
   *
   * @param {string} id - Task ID.
   * @param {boolean} isComplete - Desired completion state.
   */
  const toggleTask = async (id, isComplete) => {
    if (!id) return;

    try {
      const result = await updateTodo(id, {
        is_complete: isComplete,
      });

      setTasks((prev) =>
        prev.map((task) => (task.id === id ? result.data : task)),
      );
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  /**
   * Deletes a task through the backend.
   *
   * @param {string} id - Task ID.
   */
  const deleteTask = async (id) => {
    if (!id) return;

    try {
      await deleteTodo(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  /**
   * Removes all completed tasks through the backend.
   */
  const clearCompleted = async () => {
    const completedTasks = tasks.filter((task) => task.is_complete);

    try {
      await Promise.all(completedTasks.map((task) => deleteTodo(task.id)));
      setTasks((prev) => prev.filter((task) => !task.is_complete));
    } catch (error) {
      console.error('Failed to clear completed tasks:', error);
    }
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompleted,
  };
}

export { useTasks };
