import React from 'react';
import Header from '../components/Header/Header.jsx'; 
import Banner from '../components/Banner/Banner.jsx';
import bannerApropos from '../assets/bannerApropos.jpg';
import Collapse from '../components/Collapse/Collapse.jsx';
import Footer from '../components/Footer/Footer.jsx';

function Apropos() {
  return (
    <div>
      <Header />
      <Banner backgroundImage={bannerApropos} showText={false} />
      <Collapse />
      <Footer />
    </div>
  );
}

export default Apropos;