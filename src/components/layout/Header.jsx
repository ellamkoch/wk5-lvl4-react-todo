/**
 * Header with global theme toggle (light / dark mode)
 */
import ThemeToggle from '@components/shared/ThemeToggle.component';
import Title from '@components/shared/Title.component';
// import { Button } from "@components/ui/button";
import { useTheme } from '@hooks/useTheme';
import NavButtons from '@components/shared/NavButtons.component';
import LogoutButton from "@components/auth/LogoutButton.component";

export default function Header() {
  //used to access the global theme state of light/dark mode
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  //toggle btwn light/dark modes
  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="app-header relative z-75 pointer-events-auto mx-auto flex w-full max-w-lg items-center justify-between gap-4 px-6 pt-10 md:px-0 md:pt-16">
      <Title hLevel={1} className="text-4xl font-semibold tracking-[0.4em] text-white">
        TODO
      </Title>
      <NavButtons />
      <ThemeToggle isDark={isDark} onToggle={handleThemeChange} />
      <LogoutButton />
    </header>
  );
}
