// AboutPage.jsx
// A simple info page describing the app.

import { Card } from '@components/ui/card';
import Title from '@/components/shared/Heading.component';
import { Link } from 'react-router-dom';

/**
 * AboutPage renders a simple explanation of the app and a link back home.
 *
 * @returns {JSX.Element}
 */
function AboutPage() {
  return (
    <Card className="flex mt-6 px-5 py-3 gap-3 rounded-[4px] shadow-lg overflow-hidden">
      <Title>About</Title>
      <p className="text-m">
        This is a simple React Todo application built for a CodeX assignment. Tasks and themes are
        stored in the browser using localStorage so they persist between visits without requiring a
        backend.
      </p>
      <p>
        <Link to="/" className="text-primary/80 hover:underline text-primary transition-colors">
          Go back to the TODO List
        </Link>
      </p>
    </Card>
  );
}

export default AboutPage;
