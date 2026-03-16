// AboutPage.jsx
// A simple info page describing the app.

import { Card } from '@components/ui/card';
import Title from '@/components/shared/Heading.component';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card className="mt-6 flex flex-col gap-4 overflow-hidden rounded-[4px] px-5 py-5 shadow-lg">
      <Title>About</Title>

      <p className="text-m">
        This is a full-stack Todo application built for a CodeX assignment. The
        frontend is built with React and Vite, and the backend is an Express API
        connected to a PostgreSQL database.
      </p>

      <p className="text-m">
        Users can register and log in with JWT authentication, and todos are
        stored in a real database rather than localStorage.
      </p>

      <div>
        <p className="font-medium mb-1">Tech Stack</p>

        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>React + Vite frontend</li>
          <li>React Router for navigation</li>
          <li>TailwindCSS styling</li>
          <li>shadcn/ui component system</li>
          <li>Axios for API requests</li>
          <li>Express.js backend API</li>
          <li>PostgreSQL database</li>
          <li>JWT authentication</li>
        </ul>
      </div>

      <p>
        <Link
          to="/"
          className="text-primary/80 text-primary transition-colors hover:underline"
        >
          Go back to the TODO List
        </Link>
      </p>
    </Card>
  );
}

export default AboutPage;
