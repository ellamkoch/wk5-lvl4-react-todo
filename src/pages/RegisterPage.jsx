import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '@/lib/api/auth';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
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
      await registerUser(formData);
      navigate('/login');
    } catch (error) {
      console.error(error);
      setErrorMessage('Registration failed.');
    }
  }

  return (
    <section className="mx-auto w-full max-w-[540px] px-6">
    <div className="rounded-[5px] bg-white px-6 py-8 shadow-lg dark:bg-neutral-800">

      <h2 className="mb-6 text-2xl font-bold tracking-[0.3em] uppercase">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-[5px] border border-neutral-300 px-4 py-3 dark:border-neutral-600"
        />

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
          Register
        </button>

      </form>

      <p className="mt-4 text-sm">
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </div>
  </section>
  );
}
