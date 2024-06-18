import axios, { AxiosRequestConfig } from 'axios';
import { BASE_API_PATH, PENDING_REQUEST_TIMEOUT } from './constants';
import { RequestKey } from './types';
import { getRequestKey } from './utils';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: BASE_API_PATH,
  timeout: PENDING_REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add a request interceptor
const pendingRequests = new Map<RequestKey, AbortController>();
const removePendingRequest = (config: AxiosRequestConfig) => {
  const requestKey = getRequestKey(config);
  pendingRequests.delete(requestKey); // Remove completed request from the map
};

axiosInstance.interceptors.request.use(
  config => {
    const requestKey = getRequestKey(config);

    // Cancel any existing request with the same key
    if (pendingRequests.has(requestKey)) {
      const controller = pendingRequests.get(requestKey);
      controller?.abort();
      pendingRequests.delete(requestKey);
    }

    // Create a new AbortController for the current request
    const abortController = new AbortController();
    config.signal = abortController.signal;

    // Store the AbortController in the map
    pendingRequests.set(requestKey, abortController);

    // Add an authorization token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    removePendingRequest(response.config);
    return response;
  },
  error => {
    if (error.config) {
      removePendingRequest(error.config);
    }

    /** React store double mount issue */
    if (error.code === 'ERR_CANCELED') {
      return Promise.resolve({ status: 499 });
    }

    return Promise.reject(error);
  }
);

export const API = axiosInstance;
