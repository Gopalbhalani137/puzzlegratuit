import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import img1 from '../assets/img/bg/Article1.jpg';
import img2 from '../assets/img/bg/Article2.jpg';
import img3 from '../assets/img/bg/Article3.jpg';
import img4 from '../assets/img/bg/Article4.jpg';
import img5 from '../assets/img/bg/Article5.jpg';
import img6 from '../assets/img/bg/Article6.jpg';
import img7 from '../assets/img/bg/Article7.jpg';
import img8 from '../assets/img/bg/Article8.jpg';
import img10 from '../assets/img/bg/Article10.jpg';
import img11 from '../assets/img/bg/article11.jpg';
import img12 from '../assets/img/bg/article12.jpg';
import img13 from '../assets/img/bg/article13.jpg';
import puzzleMeditation from '../assets/img/bg/puzzle-de-méditation.jpg';
import puzzleOutil from '../assets/img/bg/Outil-de-puzzle.jpg';
import puzzleNoel from '../assets/img/bg/Puzzle-de-Noël.jpg';

function Blog() {
  // Array of blog posts
  const blogPosts = [
    {
      id: 1,
      image: img1,
      alt: "différentes façons de jouer aux puzzles",
      title: "différentes façons de jouer aux puzzles",
      link: "/blog/1",
      excerpt:
        "Bonjour! Aujourd'hui, nous allons parler des différentes façons de jouer aux puzzles..."
    },
    {
      id: 2,
      image: img2,
      alt: "",
      title: "Le plus grand joueur de jeu de puzzle physique du monde",
      link: "/blog/2",
      excerpt:
        "je peux vous donner des informations générales sur les joueurs de puzzle..."
    },
    {
      id: 3,
      image: img3,
      alt: "",
      title: "Bref historique sur le jeu de puzzle..!!!",
      link: "/blog/3",
      excerpt:
        "Les puzzles sont un passe-temps populaire depuis des siècles, remontant à l'époque..."
    },
    {
      id: 4,
      image: img4,
      alt: "",
      title: "Top 10 des jeux de puzzle les plus difficiles",
      link: "/blog/4",
      excerpt:
        "Il y a les détails du top 10 des puzzles les plus difficiles jamais créés..."
    },
    {
      id: 5,
      image: img5,
      alt: "",
      title: "Top 10 des communautés de puzzles sur Reddit",
      link: "/blog/5",
      excerpt: "voici une liste de 10 des meilleures communautés de puzzles sur Reddit."
    },
    {
      id: 6,
      image: img6,
      alt: "",
      title: "10 façons différentes de résoudre un puzzle efficacement",
      link: "/blog/6",
      excerpt:
        "Voici les détails de 10 façons différentes de résoudre efficacement un casse-tête :"
    },
    {
      id: 7,
      image: img7,
      alt: "",
      title: "Top 10 des chaînes YouTube de puzzle",
      link: "/blog/7",
      excerpt:
        "Voici des détails supplémentaires sur chaque chaîne YouTube..."
    },
    {
      id: 8,
      image: img8,
      alt: "",
      title: "Top 10 des meilleures entreprises pour acheter des puzzles à bas prix",
      link: "/blog/8",
      excerpt:
        "Voici les détails des 10 meilleures entreprises pour acheter des puzzles..."
    },
    {
      id: 10,
      image: img10,
      alt: "",
      title:
        "Quel puzzle est bon pour vous, comparaison entre les puzzles en bois et en carton",
      link: "/blog/10",
      excerpt:
        "Voici une comparaison détaillée des puzzles en bois et des puzzles en carton."
    },
    {
      id: 11,
      image: img11,
      alt: "",
      title: "avantage de jouer à un jeu de puzzle en ligne",
      link: "/blog/11",
      excerpt:
        "Voici quelques avantages de jouer à des puzzles en ligne..."
    },
    {
      id: 12,
      image: img12,
      alt: "",
      title: "Des puzzles respectueux de l'ego",
      link: "/blog/12",
      excerpt:
        "voici des informations sur les puzzles écologiques..."
    },
    {
      id: 13,
      image: img13,
      alt: "",
      title: "jeux de réflexion en ligne et puzzles physiques",
      link: "/blog/13",
      excerpt:
        "voici une comparaison entre les jeux de puzzle en ligne et les puzzles physiques..."
    },
    {
      id: 14,
      image: puzzleMeditation,
      alt: "",
      title:
        "Comment le jeu de puzzle aide à la santé mentale et la concentration",
      link: "/blog/14",
      excerpt:
        "Enfin, les puzzles peuvent être une activité éducative pour les enfants..."
    },
    {
      id: 15,
      image: puzzleOutil,
      alt: "",
      title: "10 outils de jeu de puzzle que tous les casse-tête devraient posséder",
      link: "/blog/15",
      excerpt:
        "Comment le jeu de puzzle aide comme dose de méditation pour la santé mentale..."
    },
    {
      id: 16,
      image: puzzleNoel,
      alt: "",
      title: "jeu de puzzle à jouer pendant les vacances de Noël",
      link: "/blog/16",
      excerpt:
        "jeu de puzzle à jouer pendant les vacances de Noël."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dernières nouvelles | Blog sur les puzzles</title>
        <meta
          name="description"
          content="Découvrez les dernières actualités et articles de blog sur les puzzles et casse-têtes. Devenez un pro du puzzle !"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dernières nouvelles | Blog sur les puzzles" />
        <meta
          property="og:description"
          content="Tenez-vous au courant des nouveautés et des conseils pour résoudre vos puzzles rapidement et efficacement."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="hero_forum bg_white">
        <div className="container">
          <div className="row align-items-center sm:space-y-20">
            <div className="col-lg-6 col-md-6 col-sm-12 space-y-10">
              <h1 className="text-left">Dernières nouvelles et blog</h1>
              <p>
                Obtenez la dernière mise à jour du puzzle et apprenez à être le
                meilleur dans l'art du jeu de puzzle !
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="mt-100">
        <div className="container">
          <div className="main" id="main-content">
            <div className="row">
              <div className="col-lg-8 pr-5 pr-sm-0 pl-sm-0">
                <div id="content">
                  <div className="container">
                    <div className="row">
                      {blogPosts.map((post) => (
                        <div className="col-lg-6" key={post.id}>
                          <Link to={`/blog/${post.id}`}>
                            <div className="blog has_style_grid">
                              <div className="row align-items-center">
                                <div className="col-row col-12">
                                  <div className="blog-img">
                                    <img
                                      src={post.image}
                                      alt={post.alt || post.title}
                                    />
                                  </div>
                                </div>
                                <div className="col-row col-12">
                                  <div className="blog-wrap">
                                    <h3 className="blog-title">
                                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>

                                    <p className="blog-excerpt">
                                      {post.excerpt}
                                    </p>
                                    <div className="blog-author-detail d-flex justify-content-between align-items-center">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;