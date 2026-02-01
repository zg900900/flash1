import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-blue-600">
          Flash1
        </h1>
        <p className="text-xl text-slate-500">
          Independent Vite + React + Tailwind CSS Application
        </p>
      </header>
      
      <main className="max-w-md w-full bg-white border border-slate-200 rounded-xl shadow-lg p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-green-600">
            <div className="h-2 w-2 rounded-full bg-current animate-pulse"></div>
            <span className="font-medium">Status: Standalone & Ready</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            Successfully migrated from Meituan NoCode platform. 
            Ready for local development and GitHub Pages deployment.
          </p>
          <div className="pt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between bg-slate-100 p-2 rounded">
              <span className="text-xs font-mono text-slate-500 italic">dev</span>
              <code className="text-xs font-mono font-bold text-slate-800">npm run dev</code>
            </div>
            <div className="flex items-center justify-between bg-slate-100 p-2 rounded">
              <span className="text-xs font-mono text-slate-500 italic">build</span>
              <code className="text-xs font-mono font-bold text-slate-800">npm run build</code>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="mt-12 text-sm text-slate-400">
        Built with React, Vite, and Tailwind CSS
      </footer>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}