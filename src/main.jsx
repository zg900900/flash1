import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Flash1</h1>
        <p className="text-muted-foreground">
          Independent frontend application built with Vite + React + Tailwind CSS
        </p>
      </div>
    </div>
  </React.StrictMode>
);
