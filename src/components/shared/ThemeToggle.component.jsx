import { Button } from "@components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
/**
 * ThemeToggle
 * Icon-only button. Theme logic lives in Header/ThemeProvider.
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
      <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="h-10 w-10 p-0"
    >
      <img
        src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
        alt=""
        className="h-5 w-5"
      />
    </Button>
    </TooltipTrigger>

     <TooltipContent side="bottom">
          <p>Switch theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
