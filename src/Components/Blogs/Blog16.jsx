import React from 'react';
import { Helmet } from 'react-helmet'; // For SEO meta tags
import Sidebar from '../Sidebar';

// Import images (adjust paths as needed)
import puzzleChristmas from '../../assets/img/bg/Puzzle-de-Noël.jpg';
import puzzleEditionNoel from '../../assets/img/bg/Édition-de-Noël.jpg';
import avatarImage from '../../assets/img/avatars/avatar_11.png';

function Blog16() {
  return (
    <>
      <Helmet>
        <title>Jeu de puzzle à jouer pendant les vacances de Noël</title>
        <meta
          name="description"
          content="Découvrez de nombreux puzzles amusants à jouer pendant les vacances de Noël et profitez de leurs bienfaits pour la famille."
        />
        <meta name="keywords" content="Noël, puzzle, jeux, vacances, famille" />
        <meta property="og:title" content="Jeu de puzzle à jouer pendant les vacances de Noël" />
        <meta
          property="og:description"
          content="Sélection de puzzles de Noël et les avantages de résoudre des puzzles en famille."
        />
        <meta property="og:image" content={puzzleChristmas} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="container article_page pt-100">
        <div className="main row" id="main-content">
          {/* Article */}
          <div className="col-lg-8">
            <div id="content">
              <div className="article_wrap mt-0">
                <div className="content">
                  <img
                    className="mb-30 img-fluid w-100 img_article"
                    alt="Puzzle de Noël"
                    src={puzzleChristmas}
                  />
                  <h1 className="mb-40">Jeu de puzzle à jouer pendant les vacances de Noël</h1>
                  <div className="blog-author-detail d-flex justify-content-between align-items-center">
                    <div className="author-meta d-flex justify-content-start align-items-center">
                      <div className="user">
                        <img
                          src={avatarImage}
                          alt="Auteur"
                          className="avatar avatar-sm rounded-circle w-100"
                        />
                      </div>
                      <div className="meta ps-3">
                        <p className="name color_brand">Joshua William</p>
                      </div>
                    </div>
                  </div>
                  <div className="inner">
                    <div className="snippet" style={{ textAlign: 'justify' }}>
                      <p>
                        Il existe de nombreux jeux de puzzles amusants à jouer pendant les vacances
                        de Noël. Voici quelques-uns des meilleurs jeux de puzzles pour cette
                        période :
                      </p>
                      <p>
                        <strong>1. "Winter Wonderland" de Ravensburger :</strong> Un puzzle de 1000
                        pièces représentant une scène hivernale avec un train de Noël...
                      </p>
                      <p>
                        <strong>2. "Christmas Eve" de White Mountain :</strong> Un puzzle de 1000
                        pièces représentant une scène de Noël traditionnelle...
                      </p>
                      <p>
                        <strong>3. "The Christmas Village" de Cobble Hill :</strong> Un puzzle de
                        1000 pièces montrant un village de Noël festif...
                      </p>
                      <p>
                        <strong>4. "Santa's Workshop" de Buffalo Games :</strong> Un puzzle de
                        2000 pièces représentant l’atelier du Père Noël...
                      </p>
                      <p>
                        <strong>5. "The Twelve Days of Christmas" de SunsOut :</strong> Un puzzle de
                        1000 pièces illustrant les douze jours de Noël...
                      </p>
                      <img
                        className="mb-30 img-fluid w-100 img_article"
                        alt="Édition de Noël"
                        src={puzzleEditionNoel}
                      />
                      <p>
                        <strong>6. Offrir une activité en famille :</strong> Les puzzles peuvent
                        offrir une activité amusante à faire en famille pendant les vacances de
                        Noël.
                      </p>
                      <p>
                        En jouant à des jeux de puzzles pendant les vacances, vous pouvez profiter
                        d’une activité stimulante qui offre de nombreux avantages pour la santé
                        mentale et la créativité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog16;
