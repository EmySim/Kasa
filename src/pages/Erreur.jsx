import React from 'react';
import Header from '../components/Header/Header.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import './Erreur.css';
import {Link} from "react-router-dom"

function Erreur() {
  return (
    <div>
      <Header />
      <main>
      <section id="section-principale-404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to = {"/"}>Retourner sur la page d'accueil</Link>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default Erreur;