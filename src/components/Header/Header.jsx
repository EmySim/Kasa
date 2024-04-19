import React from 'react';
import './Header.css';
import logoHeader from "../../assets/logoHeader.jpg";
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div className='header'> 
        <div className='logo_header'>
          <img src={logoHeader} alt="Logo En-tête"/>
        </div>

      <div>
        <nav className='nav'>
          <NavLink to = {"/Home"}>Accueil</NavLink>
          <NavLink to = {"/Apropos/"}>A Propos</NavLink>
        </nav>
      </div>
    </div>
  );
}
export default Header;

