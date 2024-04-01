import React from 'react';
import ReactDOM from 'react-dom/client';
import { appRouter } from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import './styles/app.scss';

const rootElement = document.getElementById('root');

  ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  );

