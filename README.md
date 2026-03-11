# wk5-lvl4-react-todo

This repository contains my Week 5 – Level 4 assignment for CodeX.
The goal of this project is to build and deploy a React Todo Single Page Application (SPA) to AWS using S3 and CloudFront.

The UI for this project is based on the
[Frontend Mentor Todo App Challenge](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW)

## Assignment Goals

1. Build a React Todo SPA locally.
2. Upload the production build output to a **private S3 bucket** (Block Public Access ON).
3. Serve the application through **CloudFront over HTTPS** .
4. Confirm **SPA routing works correctly** (refreshing routes returns the app instead of a 403/404 error).
5. _(Optional)_ Configure a **Cloudflare subdomain** pointing to the CloudFront distribution.

## Overview

### The Challenge

Users should be able to:

- Add new todos
- Mark todos as complete
- Delete todos
- Filter todos by:
  - All
  - Active
  - Completed
- Clear all completed todos
- Toggle light and dark mode
- See hover states for interactive elements
- View an optimal layout across screen sizes

### Screenshots of App

[Dark Mode Todo](C:\Users\Ella\Desktop\CodeX\Level-4\wk5-lvl4-react-todo\screenshots\darkmodetodos.png)

[Light Mode Todo](C:\Users\Ella\Desktop\CodeX\Level-4\wk5-lvl4-react-todo\screenshots\lightmodetodos.png)

[Light Mode About Page](C:\Users\Ella\Desktop\CodeX\Level-4\wk5-lvl4-react-todo\screenshots\lightmodeaboutpage.png)

[Light Mode Not Found Page](C:\Users\Ella\Desktop\CodeX\Level-4\wk5-lvl4-react-todo\screenshots\lightmodenotfoundpage.png)

### Assigment Screenshots

[Assignment Screenshots](C:\Users\Ella\Desktop\CodeX\Level-4\wk5-lvl4-react-todo\screenshots\wk5_assignment_2_screenshots.pdf)

### Links

[Solution URL](https://github.com/ellamkoch/wk5-lvl4-react-todo)

[Live Site URL](https://d1lf3b03q965y2.cloudfront.net/)

## My Process

### Built With

- React
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router for SPA navigation
- React hooks (`useState`, `useEffect`, `useMemo`)
- Browser **localStorage** for persistence

### Features

- Add, complete, and delete tasks
- Filter tasks by status (All, Active, Completed)
- Clear completed tasks
- Persistent task storage using localStorage
- Light and dark mode theme toggle
- Responsive layout
- Client-side routing with React Router

### Project Structure

src/
├── components/
│   ├── layout/        # Header, Footer, and layout-related components
│   ├── shared/        # Reusable UI components (Title, ThemeToggle, NavButtons)
│   ├── tasks/         # Task list and todo-related UI
│   └── ui/            # shadcn/ui component primitives
│
├── hooks/             # Custom React hooks (useTasks, useTheme)
│
├── pages/             # Routed page components (AboutPage, NotFoundPage)
│
├── router/            # AppRouter with React Router route definitions
│
├── providers/         # Global providers (ThemeProvider)
│
├── styles/            # Global styles and Tailwind configuration
│
├── App.jsx            # Root application component
└── main.jsx           # Application entry point

### Run Locally

Clone the project: `git clone https://github.com/YOUR-USERNAME/wk5-lvl4-react-todo.git`

Navigate into the project directory: `cd wk5-lvl4-react-todo`

Install dependencies: `npm install`

Start the development server: `npm run dev`

Then open the local development URL shown in the terminal (usually `http://localhost:5173`).

### What I Learned

This project reinforced several important React patterns, particularly around **state management, derived state, and separating UI from logic** .

#### Custom Hooks for Application Logic

Instead of placing task logic directly inside components, I created a **custom hook (**`**useTasks**`**)** that manages:

- adding tasks
- toggling completion
- deleting tasks
- clearing completed tasks
- persisting tasks to storage

This keeps the UI components focused on rendering while the hook handles application behavior.

Example:

```
const addTask = (title) => {
  if (!title) return;

  const newTask = {
    id: crypto.randomUUID(),
    title,
    is_complete: false
  };

  setTasks((prev) => [newTask, ...prev]);
};
```

#### Derived State with `useMemo`

To avoid unnecessary recalculations, derived values such as totals and filtered task lists are computed using `useMemo`.

```
const visibleTasks = useMemo(() => {
  return tasks.filter((task) => {
    if (filter === "active") return !task.is_complete;
    if (filter === "completed") return task.is_complete;
    return true;
  });
}, [tasks, filter]);
```

#### Client-Side Routing with React Router

The application uses **React Router** to implement client-side routing for the single page application.

Three routes are defined:

- `/` – main Todo list page
- `/about` – information about the project
- `*` – fallback route for unknown paths

Navigation is implemented using `NavLink`, allowing the active page to be visually highlighted in the navigation bar.

This routing structure will allow the deployed application to demonstrate proper **SPA refresh behavior** when served through CloudFront.

#### Refactoring from Supabase to Local Storage

Earlier iterations of this project used **Supabase** as a backend for storing tasks.

For this assignment, persistence was simplified by moving the data layer to **browser localStorage** .

Tasks are loaded when the application mounts:

```
useEffect(() => {
  const storedTasks = localStorage.getItem(TODO_STORAGE_KEY);
  if (!storedTasks) return;

  setTasks(JSON.parse(storedTasks));
}, []);
```

Whenever tasks change, they are written back to local storage:

```
useEffect(() => {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks));
}, [tasks]);
```

This allows the app to persist data across refreshes without requiring a backend.

## Continued Development

Possible future improvements:

- **Drag and drop task reordering**
  Implement drag-and-drop sorting of tasks. This would introduce index-based array updates using `slice()` and `splice()` to move tasks within the list while keeping React state immutable.
- **Backend persistence**
  Reintroduce a backend layer (Supabase or another API) so tasks can sync across devices instead of relying only on browser localStorage.
  Create a local db for the backend instead of using Supbase or something similar.
- **Improved accessibility**
  Add better keyboard navigation and ARIA support for task controls, filtering, and theme toggling.
- **Automated testing**
  Add tests for the `useTasks` hook and task filtering logic to validate behavior such as adding, toggling, deleting, and clearing completed tasks.
- **Task metadata**
  Extend tasks to support additional properties such as due dates, priority levels, or categories.

## Author

Ella Koch
[Frontend Mentor Profile](https://www.frontendmentor.io/profile/ellamkoch)
[GitHub Repo](https://github.com/ellamkoch)
