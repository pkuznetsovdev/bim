import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './server';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function withContentElements(...args: unknown[]) {
  return undefined
}

const Text = (...args: unknown[]) => {
  return null;
}

export const CE = {
  Text: withContentElements(Text, {
    name: 'text',
    tagName: 'span',
  }),
  Title: withContentElements(Text, {
    name: 'title',
    tagName: 'h2',
  }),
}

