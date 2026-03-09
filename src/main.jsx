// This file is where the React app starts, loads global styles, and wraps the app in providers (ThemeProvider).
//react imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
//style imports
import "@styles/index.css";
// import '@styles/main.scss';
//app import
import App from '@/App.jsx';

import { ThemeProvider } from '@/providers/themeProvider';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root and render the App component inside StrictMode
// Wrap the app in theme provider so all components can access theme context (light/dark mode)
createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark'>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
