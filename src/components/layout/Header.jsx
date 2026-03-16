/**
 * Header with global theme toggle (light / dark mode)
 */
import { NavLink, Link } from 'react-router-dom';
import ThemeToggle from '@components/shared/ThemeToggle.component';
import Title from '@components/shared/Title.component';
import { useTheme } from '@hooks/useTheme';
import LogoutButton from '@components/auth/LogoutButton.component';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const aboutLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-medium transition-colors'
      : 'text-white/70 hover:text-white transition-colors';

  return (
    <header className="app-header relative z-75 mx-auto w-full px-2 pt-6 sm:px-0 sm:pt-8 md:pt-10">
      <div className="flex items-center justify-between gap-3">
        <Link to="/" className="shrink-0">
          <Title
            hLevel={1}
            className="text-2xl sm:text-4xl font-semibold tracking-[0.22em] sm:tracking-[0.4em] text-white"
          >
            TODO
          </Title>
        </Link>

        <div className="ml-auto flex items-center gap-3 sm:gap-4">
          <NavLink to="/about" className={aboutLinkClass}>
            About
          </NavLink>

          <ThemeToggle isDark={isDark} onToggle={handleThemeChange} />

          <LogoutButton />
        </div>
      </div>
    </header>
  );
}
