import React from 'react';
import Header from '../components/Header/Header.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import Tag from '../components/Tag/Tag.jsx';

function Logement() {
  return (
    <div>
      <Header />
      <div>Hello World</div>
      <Tag label={'Cozy'}/>
      <Tag label={'Canal'}/>
      <Tag label={'Paris 10'}/>
      <Footer />
    </div>
  );
}

export default Logement;