import React from 'react';
import Home from './Home.jsx';
import Logement from './Logement.jsx';
import Erreur from './Erreur.jsx';
import Apropos from './a-propos.jsx';

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Logement/:id",
    element: <Logement />
  },
  {
    path: "/a-propos",
    element: <Apropos />
  },
  {
    path: "*",
    element: <Erreur />
  },
];

export default routes;
