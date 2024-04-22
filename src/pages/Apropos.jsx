import React from "react";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import bannerApropos from "../assets/bannerApropos.jpg";
import Collapse from "../components/Collapse/Collapse.jsx";
import Footer from "../components/Footer/Footer.jsx";
import valeurs from"../data/valeurs.json";

function Apropos() {
  return (
    <div>
      <Header />
      {<Banner backgroundImage={bannerApropos} />}
      <div className="collapse-container">
        {valeurs.map((valeur, index) => (
          <Collapse key={index} title={valeur.title} content={valeur.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
