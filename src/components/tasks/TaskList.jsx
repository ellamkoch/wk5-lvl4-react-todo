// React hooks imports:
// - useState: stores UI state (like the filter button you picked)
// - useMemo: calculates “derived values” (totals + filtered list) only when needed
import { useState, useMemo } from "react";

//child component imports
import TaskItem from "@components/tasks/TaskItem.jsx";
import NewTaskForm from "@components/tasks/NewTaskForm.jsx";
import TaskControls from "@components/tasks/TaskControls.jsx";

//custom hook import
import { useTasks } from "@hooks/useTasks.js";

//shadcn imports
import { Card } from "@components/ui/card";
// import { Separator } from "@components/ui/separator";
import { Skeleton } from "@components/ui/skeleton";

/**
 * TaskList (Day 4):
 *  - Uses the custom useTasks hook for all Supabase interactions.
 *  - Manages filter state (All / Active / Completed).
 *  - Delegates add / toggle / delete actions to the hook.
 *  - Displays loading, error and summary information.
 */
function TaskList() {
  // UI-only state: tells which filter button is selected
  const [filter, setFilter] = useState("all"); // "all" | "active" | "completed"
 //Destructuring values from the custom hook.
  const {
    tasks, // our list of tasks (array of objects)
    loading,// true while the hook is fetching or updating
    error, //error msg string if something fails
    addTask, //helper functions that talk to supabase to add/toggle or delete tasks
    toggleTask,
    deleteTask,
    clearCompleted
  } = useTasks();

  /**
   * Adds a new task by inserting it into Supabase and updating local state.
   *
   * @param {string} title - Title of the new task.
   *///called when a newtaskform submits
  const handleAddTask = async (title) => {//forwards to hook, hook inserts into supabase
    addTask(title); // and updates the local state
  };

  /**
   * Toggles the is_complete flag of a task both in Supabase and local state.
   *
   * @param {number} id - Task ID.
   * @param {boolean} isComplete - Desired completion state.
   */
  const handleToggleComplete = async (id, isComplete) => {
    toggleTask(id, isComplete);
  };

  /**
   * Deletes a task by id from Supabase and local state.
   *
   * @param {number} id - Task ID.
   */
  const handleDeleteTask = async (id) => {
    deleteTask(id);
  };

  // Derived summary information based on current tasks.
  // useMemo is for remembering values & useCallback is for functions
  const totalTasks = useMemo(() => tasks.length, [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task) => task.is_complete).length, [tasks]);

  // Derived filtered list based on current filter state.
  const visibleTasks = useMemo(() => tasks.filter((task) => {
    if (filter === "active") return !task.is_complete;
    if (filter === "completed") return task.is_complete;
    return true;
  }), [tasks, filter]);//dependency array

  return (
    // new todo section <> is an invisible react wrapper that allows the 1 parent rule, and doesn't render a div or anything in the dom. just allows things to be grouped together w/o markup.
    <>
    <Card className="mt-6 rounded-[4px] shadow-lg">
      <NewTaskForm onAddTask={handleAddTask} />
    </Card>

   <Card className="mt-6 overflow-hidden rounded-[4px] shadow-lg">
      {error && (
        <p className="error-text px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      {!loading && !error && tasks.length === 0 && (
        <p className="no-tasks px-4 py-6 text-center text-sm text-muted-foreground">
          No items yet
        </p>
      )}

      {loading ? (
        <div className="divide-y divide-border">
          {Array.from({ length: 4 }).map((_, i) => (//map tells it to make 4 empty slots for the skeleton
          //_ means we don't care about the value, i is index
            <div key={i} className="flex items-center gap-3 px-4 py-4">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-full max-w-90px" />
            </div>
          ))}
        </div>
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
