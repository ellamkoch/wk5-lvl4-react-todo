// AboutPage.jsx
// A simple info page describing the app.

import { Card } from '@components/ui/card';
import Title from '@/components/shared/Heading.component';

/**
 * AboutPage renders a simple explanation of the app and a link back home.
 *
 * @returns {JSX.Element}
 */
function AboutPage() {
  return (
    <Card className="mt-6 rounded-lg shadow-lg">
      <Title>About</Title>
      <p>
        This is a simple React Todo application built for a CodeX assignment. Tasks and themes are
        stored in the browser using localStorage so they persist between visits without requiring a
        backend.
      </p>
      <p>
        <a href="/">Go back to the homepage</a>
      </p>
    </Card>
  );
}

export default AboutPage;
