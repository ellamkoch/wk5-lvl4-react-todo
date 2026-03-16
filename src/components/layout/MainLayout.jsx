// Import the structured elements
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import HeroBackground from '@components/layout/HeroBackground';

//import hooks
import { useTheme } from '@hooks/useTheme';

/**
 * MainLayout wraps pages with a shared header and footer.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Page content.
 */
function MainLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="min-h-screen bg-background">
      <HeroBackground isDark={isDark} />

      <div className="relative z-75 -mt-[165px] sm:-mt-[300px] mb-10 px-4 sm:px-6 pointer-events-auto">
        <div className="mx-auto w-full max-w-[440px] sm:max-w-[600px] pt-5">
          <Header />
        </div>
      </div>

      <div className="list_container relative z-10 -mt-6 sm:-mt-16 px-4 sm:px-6">
        <div className="mx-auto w-full max-w-[440px] sm:max-w-[540px] pt-8 sm:pt-10">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
