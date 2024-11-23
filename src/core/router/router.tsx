import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '@pages/not-found';
import { Routes } from '@/shared/enums';
import { Login } from '@pages/auth';

import { ProtectedRoute } from './protected-route';

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: Routes.HOME,
        element: <></>,
      },
      {
        path: Routes.WILDCARD,
        element: <NotFound />,
      },
    ],
  },
  {
    element: <Login />,
    path: Routes.LOGIN,
  },
]);
