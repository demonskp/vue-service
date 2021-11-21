import axios from 'axios';

export async function devLogin({ tenantCode, userName, password }) {
  const result = await axios.post('/devLogin', {
    tenantCode,
    userName,
    password,
  });

  return result.data;
}

export async function hello() {
  const result = await axios.get('/hello');

  return result.data;
}
