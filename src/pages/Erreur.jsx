import React from 'react';
import Header from '../components/Header.jsx'; 
import Footer from '../components/Footer.jsx';
import '../App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
      <section id="section_principale_404">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href="index.html">Retourner sur la page d'accueil</a>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default App;