import client from './client';

export async function registerUser({ email, name, password }) {
  const response = await client.post('/auth/register', {
    email,
    name,
    password,
  });

  return response.data;
}

export async function loginUser({ email, password }) {
  const response = await client.post('/auth/login', {
    email,
    password,
  });

  return response.data;
}
