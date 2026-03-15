import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '@/lib/api/auth';

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage('');

    try {
      const result = await loginUser(formData);
      const token = result?.data?.token;

      if (!token) {
        throw new Error('Missing token');
      }

      localStorage.setItem('token', token);
      navigate('/');
    } catch (error) {
      console.error(error);
      setErrorMessage('Login failed.');
    }
  }

  return (
   <section className="mx-auto w-full max-w-[540px] px-6">
    <div className="rounded-[5px] bg-white px-6 py-8 shadow-lg dark:bg-neutral-800">

      <h2 className="mb-6 text-2xl font-bold tracking-[0.3em] uppercase">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-[5px] border border-neutral-300 px-4 py-3 dark:border-neutral-600"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full rounded-[5px] border border-neutral-300 px-4 py-3 dark:border-neutral-600"
        />

        <button
          type="submit"
          className="w-full rounded-[5px] bg-neutral-800 py-3 text-white dark:bg-neutral-200 dark:text-black"
        >
          Login
        </button>

      </form>

      <p className="mt-4 text-sm">
        Need an account? <Link to="/register">Register</Link>
      </p>

    </div>
  </section>
  );
}
