import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from 'pages/LandingPage';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <></>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}