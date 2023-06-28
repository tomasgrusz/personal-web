import React from 'react';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LandingPage from 'pages/LandingPage';
import Portal from 'components/three/Portal';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
      errorElement: <></>
    },
    {
      path: '/test',
      element: <Portal />,
      errorElement: <></>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}