import { useRoutes } from 'react-router-dom';

import { HomePage, NotFoundPage, SearchPage } from '@pages';
import PeoplePage from '@pages/PeoplePage/PeoplePage';
import PersonPage from '@pages/PersonPage/PersonPage';
import { ErrorMessage } from '@components/shared';

export default function Router() {
  let routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/people',
      element: <PeoplePage />,
    },
    {
      path: '/people/:id',
      element: <PersonPage />,
    },
    {
      path: '/not-found',
      element: <NotFoundPage />,
    },
    {
      path: '/search',
      element: <SearchPage />,
    },
    {
      path: '/fail',
      element: <ErrorMessage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ]);
  return routes;
}
