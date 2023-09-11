import React from 'react';
import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import HomePage from 'pages/HomePage';
import Footer from 'components/Footer';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <></>,
    },
    {
      path: '/home',
      element: (
        <>
          <HomePage />
          <Footer />
        </>
      ),
      errorElement: <></>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
