import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Appartements from './pages/Appartements.jsx';
import Erreur from './pages/Erreur.jsx';
import Apropos from './pages/Apropos.jsx';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Appartements",
    element: <Appartements />
  },
  {
    path: "/Erreur",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
