// Import the structured elements
import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";
import HeroBackground from "@components/layout/HeroBackground";

//import hooks
import { useTheme } from "@hooks/useTheme";

// In JSX and React, when a function receives a param, we call it a prop
/**
 * MainLayout wraps pages with a shared header and footer.
 *
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Page content.
 */
function MainLayout({ children }) {
  const { theme } = useTheme();
  const isDark = theme === "dark"; // reading the theme set by user
  return (
    <div className="min-h-screen bg-background ">
      <HeroBackground isDark={isDark} />

      <div className="-mt-[300px] mb-15 relative z-75 pointer-events-auto">

        <div className="mx-auto w-full max-w-lg pt-5">
          <Header />
        </div>
        </div>

        <div className="list_container -mt-16 relative z-10">
        <div className="mx-auto w-full max-w-lg pt-10">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
