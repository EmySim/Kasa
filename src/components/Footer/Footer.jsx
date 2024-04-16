import React from "react";
import './Footer.css';
import logoFooter from "../../assets/logoFooter.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="logo_footer">
        <img src={logoFooter} alt="Logo Pied de page" />
      </div>
      <div>
        <p>&copy; 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}
export default Footer;
