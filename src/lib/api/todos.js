import client from './client';

export async function getTodos() {
  const response = await client.get('/todos');
  return response.data;
}

export async function createTodo(title) {
  const response = await client.post('/todos', { title });
  return response.data;
}

export async function updateTodo(id, updates) {
  const response = await client.patch(`/todos/${id}`, updates);
  return response.data;
}

export async function deleteTodo(id) {
  const response = await client.delete(`/todos/${id}`);
  return response.data;
}
