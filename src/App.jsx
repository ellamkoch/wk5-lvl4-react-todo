/** App.jsx
 * This file decides what page content goes inside the layout
 */

import MainLayout from '@components/layout/MainLayout.jsx'; // imports header/footer, hero, centering
import AppRouter from '@/router/AppRouter.jsx';

/**
 * Root App component.
 * Renders the app router inside the shared layout.
 * We're using a single page application structure for simplicity.
 *
 * @returns {JSX.Element} The App component.
 */
export default function App() {
  return (
    <MainLayout>
      <AppRouter />
    </MainLayout>
  );
}
