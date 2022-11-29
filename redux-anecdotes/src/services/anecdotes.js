import axios from 'axios';

const baseUrl = 'http://localhost:3007/anecodtes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, likes: 0, };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export default {
  getAll,
  createNew,
};