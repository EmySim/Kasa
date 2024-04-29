import React from 'react';
import './Header.css';
import logoHeader from "../../assets/logoHeader.jpg";
import {NavLink} from "react-router-dom"

function Header() {

  return (
    <div className='header'> 
        <div className='logo-header'>
        <NavLink to="/">
          <img src={logoHeader} alt="Logo En-tête"/>
          </NavLink>
        </div>

        <nav className='nav'>
          <NavLink to = {"/"}  activeclassname="active">Accueil</NavLink>
          <NavLink to = {"/a-propos/"}  activeclassname="active">A Propos</NavLink>
        </nav>
    </div>
  );
}
export default Header;

