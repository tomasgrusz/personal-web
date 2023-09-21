import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import Footer from 'components/Footer';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <HomePage />
          <Footer />
        </>
      ),
      errorElement: <></>,
    },
  ]);

  return <RouterProvider router={router} />;
}
