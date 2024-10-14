export const BASE_API_PATH = 'http://localhost:4000/api/v1';

export const PENDING_REQUEST_TIMEOUT = 10 * 1000; // Timeout after 10 seconds

export const CANCELLED_REQUEST_STATUS = 499;

export const API_PATHS = {
  users: '/users',
  posts: '/posts',
  createPost: '/posts/create',
  auth: '/auth',
};

export const API_ENDPOINTS = {
  users: {
    current: '/me',
  },
  posts: '/posts',
  createPost: '/posts/create',
  auth: '/auth',
};
