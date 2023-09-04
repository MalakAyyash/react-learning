import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import Layout from './Componant/Layout/Layout';
import Home from './Componant/Home/Home';
import About from './Componant/About/About';
import Contact from './Componant/Contact/Contact';
import AdminLayout from './Componant/AdminLayout/AdminLayout';
import Dashbaord from './Componant/Dashboard/Dashbaord';

export const UserContext = createContext();

function Main() {
  const [value, setValue] = useState('before changes');

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'About',
          element: (
            <UserContext.Provider value={{ value, setValue }}>
              <About />
            </UserContext.Provider>
          ),
        },
        { path: 'Contact',  element: (
          <UserContext.Provider value={{ value, setValue }}>
            <Contact />
          </UserContext.Provider>
        ) },
      ],
    },
    {
      path: 'admin',
      element: <AdminLayout />,
      children: [
        { path: '', element: <Dashbaord /> },
        { path: 'About', element: <About value="massage" /> },
        { path: 'Contact', element: <Contact /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

reportWebVitals();
