import React from 'react';
import Header from '../components/Header/Header.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import {Link} from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="section_principale_404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to = {"/"}>Retourner sur la page d'accueil</Link>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default App;