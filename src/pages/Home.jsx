import React from "react";
import "./Home.css";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Banner from "../components/Banner/Banner.jsx";
import bannerHome from "../assets/bannerHome.jpg";
import Card from "../components/Card/Card.jsx";
import logementsData from "../data/logements.json";

function Home() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <Banner
          backgroundImage={bannerHome}
          label="Chez vous, partout et ailleurs"
        />

        <div className="card-container">
          {logementsData.map((logement, index) => (
            <Card
              key={index}
              title={logement.title}
              id={logement.id}
              cover={logement.cover}
            />
          ))}
        </div>
        <Footer />
      </div>
      
    </div>
  );
}

export default Home;
