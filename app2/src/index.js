import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './index.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Componant/Layout/Layout';
import Home from './Componant/Home/Home';
import About from './Componant/About/About';
import Contact from './Componant/Contact/Contact';
import AdminLayout from './Componant/AdminLayout/AdminLayout';
import Dashbaord from './Componant/Dashboard/Dashbaord';

const router = createBrowserRouter([
    {path: '/', 
    element:<Layout/>,
    children: [
    {index : true, element:<Home/>},
    {path: 'About', element:<About/>},
    {path: 'Contact', element:<Contact/>},
    ]},
  {
  path:'admin', 
  element:<AdminLayout/>,
  children: [
  {path: '', element:<Dashbaord/>},
  {path: 'About', element:<About/>},
  {path: 'Contact', element:<Contact/>},
  ]}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router} /> 

);


reportWebVitals();
