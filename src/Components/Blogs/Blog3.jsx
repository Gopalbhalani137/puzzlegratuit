import React from "react";
import { Helmet } from "react-helmet";
import img1 from "../../assets/img/avatars/avatar_11.png";
import img2 from "../../assets/img/bg/Article3.jpg";
import img3 from "../../assets/img/bg/Jigsaw-Puzzles-history.png";
import Sidebar from "../Sidebar";

function Blog3() {
    return (
        <div>
            <Helmet>
                <title>Blog 3 | Bref historique sur le jeu de puzzle</title>
                <meta
                    name="description"
                    content="Découvrez les débuts du puzzle depuis l'époque des cartes découpées de John Spilsbury, jusqu'aux puzzles modernes en bois, carton et 3D."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Blog 3 | Bref historique sur le jeu de puzzle"
                />
                <meta
                    property="og:description"
                    content="Explorez l'histoire fascinante des puzzles, leurs variantes et leurs utilisations thérapeutiques, éducatives et ludiques."
                />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <div className="container article_page pt-100">
                <div className="main row" id="main-content">
                    {/* ================================= Article */}
                    <div className="col-lg-8">
                        <div id="content">
                            <div className="article_wrap mt-0">
                                <div className="content">
                                    <img
                                        className="mb-30 img-fluid w-full img_article"
                                        alt="Bref historique sur le jeu de puzzle"
                                        src={img2}
                                    />
                                    <h1 className="mb-40">
                                        Bref historique sur le jeu de puzzle..!!!
                                    </h1>
                                    <div
                                        className="blog-author-detail d-flex justify-content-between align-items-center"
                                    >
                                        <div className="author-meta d-flex justify-content-start align-items-center">
                                            <div className="user">
                                                <img
                                                    src={img1}
                                                    alt="Joshua William"
                                                    className="avatar avatar-sm rounded-circle w-full"
                                                />
                                            </div>
                                            <div className="meta pl-20">
                                                <p className="name color_brand">Joshua William</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner">
                                        <div className="snippet" style={{ textAlign: "justify" }}>
                                            <p>
                                                Les puzzles sont un passe-temps populaire depuis des
                                                siècles, remontant à l'époque des cartes à jouer
                                                découpées en pièces pour être reconstituées. Cependant,
                                                les puzzles modernes tels que nous les connaissons
                                                aujourd'hui ont été inventés au XVIIIe siècle par un
                                                cartographe anglais du nom de John Spilsbury.
                                            </p>
                                            <p>
                                                Spilsbury a créé des puzzles en découpant des cartes
                                                géographiques en morceaux pour aider les étudiants à
                                                apprendre la géographie. Les puzzles étaient alors
                                                connus sous le nom de "cartes découpées" et étaient
                                                utilisés comme outils éducatifs.
                                            </p>
                                            <p>
                                                Au XIXe siècle, les puzzles sont devenus de plus en plus
                                                populaires, non seulement comme outils éducatifs, mais
                                                aussi comme passe-temps. Les puzzles étaient souvent
                                                faits à la main, découpés dans du bois et peints à la
                                                main. Les puzzles en bois étaient souvent appelés
                                                "puzzles à découper" et étaient populaires en Europe et
                                                en Amérique du Nord.
                                            </p>
                                            <p>
                                                Au début du XXe siècle, les puzzles en carton ont
                                                commencé à remplacer les puzzles en bois. Les puzzles en
                                                carton étaient plus abordables et pouvaient être
                                                produits en masse, ce qui les rendait plus accessibles
                                                au grand public. Les puzzles en carton étaient souvent
                                                décorés de motifs colorés et étaient de plus en plus
                                                populaires comme passe-temps et activité de loisir.
                                            </p>
                                            <p>
                                                Au fil des ans, les puzzles sont devenus de plus en plus
                                                sophistiqués, avec des images plus complexes et des
                                                pièces plus petites. Les puzzles modernes peuvent avoir
                                                des milliers de pièces et peuvent prendre des semaines,
                                                voire des mois, à compléter.
                                            </p>
                                            <p>
                                                Au début du XXIe siècle, les puzzles ont connu un regain
                                                de popularité grâce à l'informatique et aux outils de
                                                conception assistée par ordinateur. Les puzzles peuvent
                                                maintenant être créés numériquement et imprimés sur des
                                                matériaux de haute qualité, permettant des images plus
                                                détaillées et des pièces plus précises.
                                            </p>
                                            <br />
                                            <img
                                                src={img3}
                                                alt="historique du puzzle"
                                                className="mb-30 img-fluid w-full img_article"
                                            />
                                            <p>
                                                Aujourd'hui, les puzzles sont un passe-temps populaire
                                                dans le monde entier. Ils sont utilisés comme
                                                activité de loisir et comme outil éducatif, et aident
                                                à stimuler la mémoire et la résolution de problèmes. Les
                                                puzzles sont également utilisés en thérapie de groupe et
                                                individuelle, améliorant la coordination
                                                œil-main et la concentration.
                                            </p>
                                            <p>
                                                <b>
                                                    Il existe différents types de puzzles qui peuvent
                                                    varier en termes de difficulté, de nombre de pièces,
                                                    de style et de thème. Voici quelques-uns des types de
                                                    puzzles les plus populaires :
                                                </b>
                                            </p>
                                            <p>
                                                <h3>1. Les puzzles en carton :</h3> ce sont les puzzles
                                                les plus couramment utilisés. Ils existent en une grande
                                                variété de tailles, de thèmes et de niveaux de
                                                difficulté.
                                            </p>
                                            <p>
                                                <h3>2. Les puzzles en bois :</h3> considérés souvent
                                                comme des objets de collection, ils sont parfois plus
                                                difficiles à trouver que les puzzles en carton.
                                            </p>
                                            <p>
                                                <h3>3. Les puzzles 3D :</h3> ces puzzles offrent une
                                                expérience unique en créant une image en trois
                                                dimensions. Ils sont généralement constitués de pièces
                                                en plastique qui s'emboîtent pour former des structures
                                                tridimensionnelles.
                                            </p>
                                            <br />
                                            <center>
                                                <div className="video-container">

                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/yvFMGJqXab0?si=AugVLy-RXtaY42vD"
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    referrerPolicy="strict-origin-when-cross-origin"
                                                    allowFullScreen
                                                    ></iframe>
                                                    </div>
                                            </center>
                                            <p>
                                                <h3>4. Les puzzles photo :</h3> ces puzzles sont créés à
                                                partir de photos personnelles ou de paysages célèbres.
                                                Souvent offerts comme cadeaux personnalisés, ils
                                                représentent une expérience de puzzle unique.
                                            </p>
                                            <p>
                                                <h3>5. Les puzzles de mosaïque :</h3> créés à partir de
                                                petits morceaux colorés de papier ou de plastique, ils
                                                offrent une expérience de puzzle différente des puzzles
                                                en carton.
                                            </p>
                                            <p>
                                                <h3>6. Les puzzles pour enfants :</h3> ils comportent
                                                des pièces plus grandes et plus colorées, parfois avec
                                                des images d’animaux ou de personnages de
                                                dessins animés.
                                            </p>
                                            <p>
                                                <h3>7. Les puzzles de casse-tête :</h3> réalisés à
                                                partir de bois ou de métal, ils sont souvent très
                                                difficiles et considérés comme de vraies énigmes.
                                            </p>
                                            <p>
                                                De nombreuses variantes de puzzles existent, chacune
                                                apportant une expérience différente et un défi unique.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ================================= sidebar */}
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog3;
