import React from "react";
import { Helmet } from "react-helmet";
import img1 from "../../assets/img/bg/in_hero1.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <Helmet>
        <title>Puzzle en ligne | Jouez gratuitement</title>
        <meta
          name="description"
          content="Profitez du meilleur puzzle en ligne gratuit, accessible partout dans le monde, et découvrez une expérience immersive en 3D."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Puzzle en ligne | Jouez gratuitement" />
        <meta
          property="og:description"
          content="Jouez à un jeu de puzzle en ligne gratuit et profitez d'une véritable expérience 3D partout dans le monde."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="container-fluid px-5">
        <div className="row d-flex align-items-center flex-column-reverse flex-md-row">
          {/* Left Content */}
          <div className="col-md-6 text-center text-md-start mt-4 mt-md-0">
            <div className="hero__left">
              <h1 className="hero__title text-3xl md:text-5xl font-bold mb-3">
                Puzzle en ligne
              </h1>
              <p className="hero__text text-lg md:text-xl mb-4">
                Nous sommes celui qui fournit le meilleur puzzle en ligne gratuit
                pour le vôtre partout dans le monde pour nos utilisateurs. Ici,
                vous pouvez jouer à un jeu de puzzle en ligne gratuit et profiter
                de votre jeu avec une véritable expiration 3D.
              </p>
              {/* Button */}
              <div className="d-flex justify-content-center justify-content-md-start mt-2">
                <Link to="/jigsaw" className="btn btn-primary px-4 py-2">
                  Jouer gratuitement
                </Link>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0 mt-4 mt-md-0">
            <img className="img-fluid" id="img_js" src={img1} alt="Puzzle" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;