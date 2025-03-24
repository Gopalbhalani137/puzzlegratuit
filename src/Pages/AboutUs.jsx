import React from "react";
import { Helmet } from "react-helmet";
import img1 from "../assets/img/bg/About us.png";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>À propos de nous | Puzzle en ligne gratuit</title>
        <meta
          name="description"
          content="Découvrez l'histoire et les valeurs de JigSaw Verse, l'un des plus grands sites de puzzle en ligne, et comment nous soutenons les créateurs partout dans le monde."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="À propos de nous | Puzzle en ligne gratuit"
        />
        <meta
          property="og:description"
          content="En savoir plus sur la mission de JigSaw Verse, le meilleur puzzle en ligne pour se détendre et exprimer sa créativité."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="about-us">
        <div className="container">
          <div className="about-us__content">
            <div className="about-us__image">
              <img
                src={img1}
                alt="image représentant un travail d'équipe"
              />
            </div>
            <div className="about-us__text">
              <p>
                JigSaw Verse a été créé en 2023 pour présenter le travail
                d'illustrateurs talentueux et offrir aux fans la possibilité de
                co-créer avec eux. Depuis lors, notre attention s'est élargie
                pour inclure le monde plus large de l'expression de soi, et nous
                disposons désormais de la plus grande collection au monde de
                jeux de puzzle JigSaw conçus par des illustrateurs indépendants.
              </p>

              <p>
                Notre plateforme est dédiée à soutenir les créateurs du monde
                entier tout en offrant aux joueurs le meilleur puzzle en ligne
                pour se détendre. Nous pensons que jouer à un jeu de puzzle peut
                être une forme de méditation, aidant les gens à se libérer du
                stress et de l'anxiété et à rester présents dans l'instant
                présent. Notre équipe explore continuellement de nouvelles
                façons d'intégrer la technologie et la psychologie pour aider
                les individus à se détendre et à exprimer leur créativité.
              </p>

              <p>
                Chez JigSaw Verse, nous sommes passionnés par la présentation du
                travail unique d'illustrateurs talentueux et par l'offre aux
                fans de la possibilité de co-créer avec eux. Notre objectif
                s'est élargi pour englober le monde plus large de l'expression
                de soi, ce qui a donné naissance à la plus grande collection au
                monde de jeux de puzzle JigSaw conçus par des illustrateurs
                indépendants. Notre plateforme soutient activement les créateurs
                du monde entier, tout en offrant aux joueurs le meilleur puzzle
                en ligne pour se détendre. Notre équipe se consacre à
                l'exploration de nouvelles façons de combiner la technologie et
                la psychologie pour aider les gens à se détendre et à exprimer
                leur créativité...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;