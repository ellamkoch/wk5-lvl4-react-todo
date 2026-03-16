//NavButtons.component.jsx
//This is simple button group for the Nav Bar at the top of the page to help the user navigate.

import { NavLink } from 'react-router-dom';
import { Button } from '@components/ui/button';

function NavButtons() {
  const baseBtn =
    'text-sm md:text-lg text-white hover:underline bg-transparent transition-transform duration-150 hover:scale-[1.03]';

  const navLinkClass = ({ isActive }) =>
  isActive
    ? 'px-0.5 pb-1 text-white font-medium transition-colors'
    : 'px-0.5 pb-1 text-white/70 hover:text-white transition-colors';

  return (

      <Button asChild variant="ghost" className={baseBtn}>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </Button>
      );
}
export default NavButtons;
