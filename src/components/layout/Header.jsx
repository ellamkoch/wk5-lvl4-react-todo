import Title from "@components/shared/Title.component";
import { Button } from "@components/ui/button";
import { useTheme } from "@hooks/useTheme";

/**
 * Application header component.
 */
export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleThemeChange = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="app-header">
      <Title>
        TODO
      </Title>


<Button variant="secondary" onClick={handleThemeChange} type="button" aria-label={`Change to ${isDark ? "Light" : "Dark"} Mode`}>
        Change to {isDark ? "Light" : "Dark"} Mode
      </Button>
    </header>
  );
}
