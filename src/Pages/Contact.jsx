import React from 'react';
import { Helmet } from 'react-helmet'; // Added import for Helmet
import img1 from '../assets/img/bg/Contact us.png';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contactez-nous | Puzzle Gratuit</title>
        <meta
          name="description"
          content="Contactez-nous pour toute question ou demande concernant notre plateforme de puzzle gratuit en ligne."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contactez-nous | Puzzle Gratuit" />
        <meta
          property="og:description"
          content="N'hésitez pas à nous écrire pour toute question ou suggestion liée à nos puzzles en ligne gratuits."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="container py-4 py-md-5">
        <div className="row g-4 align-items-center">
          <div className="col-md-4">
            <div className="text-center">
              <img
                src={img1}
                alt="Contact illustration"
                className="img-fluid px-3 px-md-4 max-width-300"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="px-3 px-md-4">
              <div className="mb-4">
                <h1 className="h2 mb-3">Salut, 🖐 nous sommes un puzzle gratuit</h1>
                <p className="lead">
                  Nous sommes là pour vous aider et répondre à toutes vos questions.<br />
                  Nous avons hâte d'avoir de tes nouvelles🙂
                </p>
              </div>

              <form className="card p-4">
                <div className="row g-3">
                  <div className="col-12">
                    <span className="form-span">Nom</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="col-md-6">
                    <span className="form-span">E-mail</span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="votrenom@gmail.com"
                    />
                  </div>

                  <div className="col-md-6">
                    <span className="form-span">Pays</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nom du pays"
                    />
                  </div>

                  <div className="col-12">
                    <span className="form-span">Profil de médias sociaux</span>
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Lien de votre profil"
                    />
                  </div>

                  <div className="col-12">
                    <span className="form-span">Message</span>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Votre message"
                    ></textarea>
                  </div>

                  <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary px-4">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;