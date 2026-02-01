import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return <h1>Flash1</h1>;
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error('Root element not found');
}