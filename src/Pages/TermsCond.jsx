import React from 'react';
import { Helmet } from 'react-helmet';

function TermsCond() {
  return (
    <>
      <Helmet>
        <title>Termes et Conditions | Puzzle Gratuit</title>
        <meta
          name="description"
          content="Découvrez les termes et conditions régissant l'utilisation de notre site web de jeu de puzzle. Assurez-vous de lire attentivement avant de commencer à jouer."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Termes et Conditions | Puzzle Gratuit" />
        <meta
          property="og:description"
          content="Consultez nos termes et conditions pour en savoir plus sur l'utilisation de notre site de puzzle en ligne et respecter les règles."
        />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h1 className="h2 mb-4">Termes et Conditions</h1>
                <div className="terms-content">
                  <p className="mb-4">
                    Merci de lire attentivement les termes et conditions suivants avant d'utiliser notre site web de jeu de puzzle.
                    En accédant à ce site, vous acceptez d'être lié par les présentes conditions.
                    Si vous n'acceptez pas ces termes et conditions, veuillez ne pas utiliser notre site web.
                  </p>
                  <section className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Propriété intellectuelle</h2>
                    <p>
                      Tout le contenu présent sur notre site web, y compris les graphiques, les images,
                      les textes, les logos et les marques de commerce, est protégé par les lois sur la
                      propriété intellectuelle. Il est interdit de copier, reproduire ou distribuer ces
                      éléments sans notre autorisation écrite préalable.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Utilisation du site web</h2>
                    <p>
                      Notre site web est destiné à un usage personnel et non commercial. Vous acceptez
                      de ne pas utiliser notre site web à des fins illégales ou interdites par la loi.
                      Vous vous engagez à ne pas perturber le fonctionnement normal du site web ni à
                      tenter d'accéder à des informations confidentielles.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Responsabilité</h2>
                    <p>
                      Nous faisons tout notre possible pour assurer l'exactitude et la fiabilité des
                      informations présentes sur notre site web. Cependant, nous ne pouvons pas garantir
                      que toutes les informations sont complètes, à jour et exemptes d'erreurs. Nous
                      déclinons toute responsabilité en cas de perte, de dommage ou de préjudice
                      découlant de l'utilisation de notre site web.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Liens externes</h2>
                    <p>
                      Notre site web peut contenir des liens vers d'autres sites web qui ne sont pas
                      sous notre contrôle. Nous déclinons toute responsabilité quant au contenu de ces
                      sites externes. L'utilisation de ces liens se fait à vos propres risques.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Modifications des termes et conditions</h2>
                    <p>
                      Nous nous réservons le droit de modifier ces termes et conditions à tout moment,
                      sans préavis. Les modifications prendront effet dès leur publication sur notre
                      site web. Il est de votre responsabilité de consulter régulièrement cette page
                      pour prendre connaissance des éventuelles mises à jour.
                    </p>
                  </section>
                  <section className="mb-4">
                    <h2 className="h5 fw-bold mb-3">Loi applicable et juridiction compétente</h2>
                    <p>
                      Ces termes et conditions sont régis par les lois de [pays]. Tout litige découlant
                      de l'utilisation de notre site web sera soumis à la juridiction exclusive des
                      tribunaux compétents de [ville, pays].
                    </p>
                  </section>
                  <hr className="my-4" />
                  <footer className="text-muted">
                    <p className="mb-2">
                      Pour toute question concernant ces termes et conditions, veuillez nous contacter à
                      <a href="mailto:contact@example.com" className="ms-1">contact@example.com</a>
                    </p>
                    <p className="small mb-0">Date d'entrée en vigueur : 21-May-2024</p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsCond;