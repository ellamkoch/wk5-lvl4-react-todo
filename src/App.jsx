import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '@/components/auth/LoginPage.jsx';
import ProtectedRoute from '@/components/auth/ProtectedRoute.jsx';
import RegisterPage from '@/components/auth/RegisterPage.jsx';
import TodosPage from '@/components/tasks/TodosPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/todos" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/todos"
        element={
          <ProtectedRoute>
            <TodosPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
