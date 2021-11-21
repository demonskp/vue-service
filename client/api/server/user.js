import axios from 'axios';

export const apiName = 'userApi';

export async function getUserConfig() {
  const result = await axios.get('/api/scan/home-api/get-user-config-info');

  return result.data;
}
