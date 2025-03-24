import React from "react";
import { Helmet } from "react-helmet";
import img1 from "../assets/logo.png";
import 'remixicon/fonts/remixicon.css';

function Footer() {
  return (
    <>
      <Helmet>
        <title>Footer | Puzzle Gratuit</title>
        <meta
          name="description"
          content="Le meilleur endroit pour jouer gratuitement aux puzzles en ligne! Rejoignez-nous pour plus de contenu et de divertissement."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Footer | Puzzle Gratuit" />
        <meta
          property="og:description"
          content="Le meilleur endroit pour jouer gratuitement aux puzzles en ligne! Rejoignez-nous pour plus de contenu et de divertissement."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div>
        <footer className="footer__1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 space-y-20">
                <div className="footer__logo">
                  <a href="/">
                    <img src={img1} alt="logo" style={{ height: "70px" }} />
                  </a>
                </div>
                <p className="footer__text">
                  Le meilleur endroit pour jouer gratuitement aux puzzles en
                  ligne!
                </p>
              </div>

              <div className="col-lg-2 col-6">
                <h6 className="footer__title">
                  <a href="/contact">Contactez-nous</a>
                </h6>
                <h6 className="footer__title">
                  <a href="/about-us">À propos de nous</a>
                </h6>
                <ul className="footer__list"></ul>
                <div>
                  <ul className="footer__social space-x-10 mb-40">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=100095181210655">
                        <i className="ri-facebook-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.reddit.com/user/Puzzle_gratuits/">
                        <i className="ri-reddit-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/Puzzlegratuits">
                        <i className="ri-twitter-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 col-6">
                <ul className="footer__list"></ul>
              </div>
            </div>

            <p className="text-center mt-4">
              Copyright © 2024. Créé par puzzle gratuit.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
