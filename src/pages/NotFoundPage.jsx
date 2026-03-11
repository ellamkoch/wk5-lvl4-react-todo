// NotFoundPage.jsx
// A simple 404 page that is intentionally stateless so it renders consistently
// regardless of theme changes (theme is handled globally by ThemeProvider).

import { Card } from '@components/ui/card';
import Title from '@/components/shared/Heading.component';
import { Link } from 'react-router-dom';

/**
 * NotFoundPage renders a basic "404 - Not Found" view with a link back to the homepage.
 *
 * @returns {JSX.Element}
 */
function NotFoundPage() {
  return (
    <Card className="flex mt-6 px-5 py-3 gap-3 rounded-[4px] shadow-lg overflow-hidden">
      <Title>404 - Not Found</Title>
      <p className="text-m">
        Like the droids you were looking for, the page you were looking for is not here.
      </p>
      <p>
        <Link to="/" className="text-primary/80 hover:underline text-primary transition-colors">
          Go back to the TODO List
        </Link>
      </p>
    </Card>
  );
}

export default NotFoundPage;
