import React from 'react';
import './Navbar.css';
import logoHeader from "../assets/logoHeader.svg";

function Navbar() {
  return (
   <nav classname='navbar'> 
      <div className='logo_navbar'>
        <img src={logoHeader} alt="Logo En-tête"/>
      </div>
      <div>
        <a href="index.html">Accueil</a>
        <a href="#">A Propos</a>
      </div>
    </nav>
  );
}
export default Navbar;