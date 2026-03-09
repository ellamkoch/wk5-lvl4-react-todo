// React hooks imports:
// - useState: stores UI state (like the filter button you picked)
// - useMemo: calculates “derived values” (totals + filtered list) only when needed
import { useState, useMemo } from 'react';

//child component imports
import TaskItem from '@components/tasks/TaskItem.jsx';
import NewTaskForm from '@components/tasks/NewTaskForm.jsx';
import TaskControls from '@components/tasks/TaskControls.jsx';

//custom hook import
import { useTasks } from '@hooks/useTasks.js';

//shadcn imports
import { Card } from '@components/ui/card';

/**
 * TaskList:
 *  - Uses the custom useTasks hook for all localStorage interactions.
 *  - Manages filter state (All / Active / Completed).
 *  - Delegates add / toggle / delete actions to the hook.
 *  - Displays summary information.
 */
function TaskList() {
  // UI-only state: tells which filter button is selected
  const [filter, setFilter] = useState('all'); // "all" | "active" | "completed"

  // Destructuring values from the custom hook.
  const {
    tasks, // our list of tasks (array of objects)
    addTask, // helper functions that update localStorage and state
    toggleTask,
    deleteTask,
    clearCompleted,
  } = useTasks();

  /**
   * Adds a new task by inserting it into localStorage and updating local state.
   *
   * @param {string} title - Title of the new task.
   */
  const handleAddTask = (title) => {
    // Forwards to hook, which saves the new task into localStorage.
    addTask(title);
  };

  /**
   * Toggles the is_complete flag of a task in localStorage and local state.
   *
   * @param {string} id - Task ID.
   * @param {boolean} isComplete - Desired completion state.
   */
  const handleToggleComplete = (id, isComplete) => {
    toggleTask(id, isComplete);
  };

  /**
   * Deletes a task by id from localStorage and local state.
   *
   * @param {string} id - Task ID.
   */
  const handleDeleteTask = (id) => {
    deleteTask(id);
  };

  // Derived summary information based on current tasks.
  // useMemo is for remembering values & useCallback is for functions
  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.is_complete).length, [tasks]);

  // Derived filtered list based on current filter state.
  const visibleTasks = useMemo(
    () =>
      tasks.filter((task) => {
        if (filter === 'active') return !task.is_complete;
        if (filter === 'completed') return task.is_complete;
        return true;
      }),
    [tasks, filter],
  ); //dependency array

  const emptyMessage =
    filter === 'active'
      ? 'No active todos'
      : filter === 'completed'
        ? 'No completed todos'
        : 'No todos yet';

  return (
    // new todo section <> is an invisible react wrapper that allows the 1 parent rule, and doesn't render a div or anything in the dom. just allows things to be grouped together w/o markup.
    <>
      <Card className="mt-6 rounded-[4px] shadow-lg">
        <NewTaskForm onAddTask={handleAddTask} />
      </Card>

      <Card className="mt-6 overflow-hidden rounded-[4px] shadow-lg">
        {visibleTasks.length === 0 ? (
          <p className="no-tasks px-4 py-6 text-center text-sm text-muted-foreground">
            {emptyMessage}
          </p>
        ) : (
          <ul className="task-list divide-y divide-border">
            {visibleTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
              />
            ))}
          </ul>
        )}
        {/* Filter controls - passing vars to props here. */}
        <TaskControls
          filter={filter}
          setFilter={setFilter}
          totalTasks={totalTasks}
          completedTasks={completedTasks}
          clearCompleted={clearCompleted}
        />
      </Card>
    </>
  );
}

export default TaskList;
