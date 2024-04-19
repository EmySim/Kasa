import React, { useEffect } from 'react';
import Header from '../components/Header/Header.jsx'; 
import Footer from '../components/Footer/Footer.jsx';
import Banner from '../components/Banner/Banner.jsx';
import bannerHome from '../assets/bannerHome.jpg';
import logementsData from '../data/logements.json'; // Importation des données du fichier logements.json

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
      <Banner backgroundImage={bannerHome} showText={true}/>
      <Footer />
    </div>
  );
}

export default Home;
