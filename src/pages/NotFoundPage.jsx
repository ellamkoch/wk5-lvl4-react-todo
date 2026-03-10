// NotFoundPage.jsx
// A simple 404 page that is intentionally stateless so it renders consistently
// regardless of theme changes (theme is handled globally by ThemeProvider).

import { Card } from '@components/ui/card';
import Title from '@/components/shared/Heading.component';

/**
 * NotFoundPage renders a basic "404 - Not Found" view with a link back to the homepage.
 *
 * @returns {JSX.Element}
 */
function NotFoundPage() {
  return (
    <Card className="mt-6 rounded-lg shadow-lg">
      <Title>404 - Not Found</Title>
      <p>Like the droids you were looking for, the page you were looking for is not here.</p>
      <p>
        <a href="/">Go back to the homepage</a>
      </p>
    </Card>
  );
}

export default NotFoundPage;
