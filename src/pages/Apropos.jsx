import React from "react";
import Header from "../components/Header/Header.jsx";
import Banner from "../components/Banner/Banner.jsx";
import bannerApropos from "../assets/bannerApropos.jpg";
import Collapse from "../components/Collapse/Collapse.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Apropos() {
  return (
    <div>
      <Header />
      <Banner backgroundImage={bannerApropos} showText={false} />
      <div className="CollapseContainer">
        <Collapse title="Fiabilité">
          Fiabilité Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          nec commodo velit. Donec at sem nec velit ullamcorper fermentum.
        </Collapse>
        <Collapse title="Respect">
          Respect Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          nec commodo velit. Donec at sem nec velit ullamcorper fermentum.
        </Collapse>
        <Collapse title="Service">
          Service Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          nec commodo velit. Donec at sem nec velit ullamcorper fermentum.
        </Collapse>
        <Collapse title="Sécurité">
          Sécurité Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          nec commodo velit. Donec at sem nec velit ullamcorper fermentum.
        </Collapse>
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
