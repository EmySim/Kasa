import React from 'react';
import './Header.css';
import logoHeader from "../assets/logoHeader.svg";

function Header() {
  return (
    <div className='header'> 
        <div className='logo_header'>
          <img src={logoHeader} alt="Logo En-tête"/>
        </div>

      <div className='nav'>
        <nav>
          <a href="index.html">Accueil</a>
          <a href="#">A Propos</a>
        </nav>
      </div>
    </div>
  );
}
export default Header;

