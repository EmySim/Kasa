import React from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams depuis react-router-dom
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Tag from '../components/Tag/Tag.jsx';
import logementsData from '../data/logements.json';

function Logement() {
  const { id } = useParams();
{/* dans un useeffect, il faut voir si l'id existe dans mon logementdata et oui, je dois extraire de quoi fiare le titre, la description les tags ...*/}
  return (
    <div>
      <Header />
      <div>Hello World</div>
      {/* Utiliser la valeur de l'ID récupérée */}
      <div>ID: {id}</div>
      <Tag label={'Cozy'} />
      <Tag label={'Canal'} />
      <Tag label={'Paris 10'} />
      <Footer />
    </div>
  );
}

export default Logement;
