import React from "react";
import './Footer.css';
import logoFooter from "../../assets/logoFooter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="logo-footer">
        <img src={logoFooter} alt="Logo Pied de page" />
      </div>
      <div>
        <p><span>&copy; 2024 Kasa. All </span> <span>rights reserved</span></p>
      </div>
    </div>
  );
}
export default Footer;
