import React, { useEffect } from 'react';
import './Home.css';
import Header from '../components/Header/Header.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import Banner from '../components/Banner/Banner.jsx';
import bannerHome from '../assets/bannerHome.jpg';
import Card from '../components/Card/Card.jsx'
import logementsData from '../data/logements.json';

function Home() {

  useEffect(() => {
    // Utilisation de console.log pour afficher les données du fichier logements.json
    console.log(logementsData);
    console.log(logementsData[0]);
    console.log(logementsData[0].id);
    console.log(logementsData[0].description);
  }, []); // Les crochets vides [] assurent que useEffect s'exécute une seule fois après le montage du composant

  return (
    <div>
      <Header />
      <Banner backgroundImage={bannerHome} label="Chez vous, partout et ailleurs" />
      <div className='card-container'>
      {logementsData.map((logement, index) => (
          <Card key={index} title={logement.title} id={logement.id} cover={logement.cover} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
