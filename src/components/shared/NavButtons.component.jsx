//NavButtons.component.jsx
//This is simple button group for the Nav Bar at the top of the page to help the user navigate.

import { NavLink } from 'react-router-dom';
import { Button } from '@components/ui/button';
import { ButtonGroup, ButtonGroupSeparator } from '@components/ui/button-group';

function NavButtons() {
  const baseBtn =
    'text-lg text-white hover:underline bg-transparent transition-transform duration-150 hover:scale-[1.03]';

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'px-1 pb-1 text-white font-medium transition-colors'
      : 'px-1 pb-1 text-white/70 hover:text-white transition-colors';

  return (
    <ButtonGroup aria-label="Nav Bar">
      <Button asChild variant="ghost" className={baseBtn}>
        <NavLink to="/" className={navLinkClass}>
          TODO List
        </NavLink>
      </Button>

      <ButtonGroupSeparator className="bg-white/70 px-0.25 max-h-7" />

      <Button asChild variant="ghost" className={baseBtn}>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </Button>
    </ButtonGroup>
  );
}
export default NavButtons;
