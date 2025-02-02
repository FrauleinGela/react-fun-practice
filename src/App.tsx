import { Header } from './common/layouts/Header/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Essentials } from './modules/Essentials/Essentials';
import { Game } from './modules/Game/Game';

const ComponentRoute = () => {
  return (
    <div>
      <Header>
        <p></p>
      </Header>
      <main id='content'>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComponentRoute />,
    children: [
      {
        path: '/',
        element: <Essentials />,
      },
      {
        path: '/game',
        element: <Game />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
