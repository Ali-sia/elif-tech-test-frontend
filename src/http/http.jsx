import axios from 'axios';

export const publicApi = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://elif-tech-test-api.onrender.com/api',
});

export const privateApi = axios.create({
  // baseURL: 'http://localhost:3000/api',
  baseURL: 'https://elif-tech-test-api.onrender.com/api',
});
