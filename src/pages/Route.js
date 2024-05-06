import React from 'react';
import Home from './Home.jsx';
import Logement from './Logement.jsx';
import Erreur from './Erreur.jsx';
import Apropos from './Apropos.jsx';
import ScrollTop from '../components/Scrolltop.jsx';

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollTop />
        <Home />
      </>
    )
  },
  {
    path: "/Logement/:id",
    element: (
      <>
        <ScrollTop />
        <Logement />
      </>
    )
  },
  {
    path: "/a-propos",
    element: (
      <>
        <ScrollTop />
        <Apropos />
      </>
    )
  },
  {
    path: "*",
    element: (
      <>
        <ScrollTop />
        <Erreur />
      </>
    )
  },
];

export default routes;
