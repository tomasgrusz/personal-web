import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import Footer from 'components/Footer';
import MagicSwitch from 'components/MagicSwitch';
import WIPModal from 'components/WIPModal';
import Error from 'components/Error';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <HomePage />
          <MagicSwitch />
          <Footer />
          {/* WIP Modal */}
          <WIPModal />
        </>
      ),
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}
