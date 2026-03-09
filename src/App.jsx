//This file decides what page content goes inside the layout

import MainLayout from "@components/layout/MainLayout.jsx";//imports header/footer, hero, centering
import TaskList from "@components/tasks/TaskList.jsx";//imports todo app UI

/**
 * Root App component.
 * Renders the TaskList inside the shared layout.
 * We're using a single page application structure for simplicity.
 *
 * @returns {JSX.Element} The App component.
 */
export default function App() {
  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
}
