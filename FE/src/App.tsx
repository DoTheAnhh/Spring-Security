import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Layouts';
import ListProduct from './components/Product/ListProduct';

interface RouteComponent {
  path: string;
  element: React.ComponentType<any>;
  children?: RouteComponent[];
}

const routes: RouteComponent[] = [
  {
    path: '/login',
    element: Login
  },
  {
    path: '/',
    element: Home,
    children: [
      {
        path: '/home',
        element: ListProduct
      },
      {
        path: '/list-product',
        element: ListProduct
      }
    ]
  }
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.element />}
          >
            {route.children && route.children.map(child => (
              <Route
                key={`${route.path}-${child.path}`}
                path={`${route.path}/${child.path}`}
                element={<child.element />}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
