export const API = (url: string, params?: RequestInit) => {
  return fetch(url, params);
}
