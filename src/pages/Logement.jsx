import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importer useParams depuis react-router-dom
import logementsData from "../data/logements.json";
import "./Logement.css";
import Header from "../components/Header/Header.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Tag from "../components/Tag/Tag.jsx";
import Details from "../components/Details/Details.jsx";
import Stars from "../components/Stars/Stars.jsx";
import Collapse from "../components/Collapse/Collapse.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Erreur from "./Erreur.jsx";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = logementsData.find((item) => item.id === id);
    setLogement(selectedLogement);
  }, []);

  return logement ? (
    <div>
      <Header />
      <div className="logement-page-main-container">
        {logement && (
          <Gallery cover={logement.cover} pictures={logement.pictures} />
        )}

        {/*<div>ID: {id}</div> {/* Utiliser la valeur de l'ID récupérée */}

        <div className="flat-page-container">
          <div className="flat-page-container-left">
            {logement && (
              <>
                <h1 className="title-logement">{logement.title}</h1>
                <h2 className="location">{logement.location}</h2>
                <div className="tag-container">
                  {logement.tags.map((tag, index) => (
                    <Tag key={index} label={tag} />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flat-page-container-right">
            {logement && <Details host={logement.host} />}
            <Stars rating={logement && parseInt(logement.rating)} />
          </div>
        </div>

        <div className="collapse-container-flat">
          <Collapse
            title="Description"
            content={logement && logement.description}
          />

          <Collapse
            title="Equipements"
            content={logement && logement.equipments}
          />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <Erreur />
  );
}

export default Logement;
