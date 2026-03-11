/**
 * Custom hook that encapsulates all task-related local storage logic:
 *  - load tasks from localStorage
 *  - add task
 *  - toggle completion
 *  - delete task
 *  - clear completed tasks
 */

// react imports
import { useEffect, useState } from 'react';
import { TODO_STORAGE_KEY } from '@/constants/appConstants';

function useTasks() {
  // local state owned by the hook
  const [tasks, setTasks] = useState(() => {
    // Initialize from localStorage if any tasks exist.
    const storedTasks = localStorage.getItem(TODO_STORAGE_KEY);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // Persist tasks to localStorage whenever they change.
  useEffect(() => {
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  /**
   * Adds a new task to local state and localStorage.
   *
   * @param {string} title - Title of the new task.
   */
  const addTask = (title) => {
    if (!title) return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      is_complete: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  /**
   * Toggles a task's completion status in local state and localStorage.
   *
   * @param {string} id - Task ID.
   * @param {boolean} isComplete - Desired completion state.
   */
  const toggleTask = (id, isComplete) => {
    if (!id) return;

    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, is_complete: isComplete } : task)),
    );
  };

  /**
   * Deletes a task from local state and localStorage.
   *
   * @param {string} id - Task ID.
   */
  const deleteTask = (id) => {
    if (!id) return;

    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  /**
   * Removes all completed tasks from local state and localStorage.
   */
  const clearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.is_complete));
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
