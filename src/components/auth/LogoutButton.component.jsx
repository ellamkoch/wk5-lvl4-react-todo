import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function LogoutButton() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      className="rounded-xl border border-white/40 bg-transparent px-3 sm:px-5 text-[11px] sm:text-sm font-semibold text-white shadow-none transition-transform duration-150 hover:scale-[1.03] hover:bg-white/10 hover:text-white dark:border-white/30"
    >
      Logout
    </Button>
  );
}
