import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './pages/Home.jsx';
import Logement from './pages/Logement.jsx';
import Erreur from './pages/Erreur.jsx';
import Apropos from './pages/Apropos.jsx';

const router = createBrowserRouter([
  
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Logement",
    element: <Logement />
  },
  {
    path: "*",
    element: <Erreur />
  },
  {
    path: "/APropos",
    element: <Apropos />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
