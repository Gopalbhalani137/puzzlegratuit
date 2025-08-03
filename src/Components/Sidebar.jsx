import React from 'react';
import { Helmet } from 'react-helmet';

function Sidebar() {
    return (
        <>
            <div>
                <aside className="blog_sidebar">
                    <div className="widget">
                        <h3 className="widget-title text-dark">Connectons-nous</h3>
                        <div className="widget-wrap">
                            <div className="social-widget">
                                <a>
                                    <div className="social_link facebook">
                                        <i className="ri-facebook-box-line"></i>
                                    </div>
                                </a>
                                <a>
                                    <div className="social_link dribbble">
                                        <i className="ri-dribbble-line"></i>
                                    </div>
                                </a>
                                <a>
                                    <div className="social_link youtube">
                                        <i className="ri-youtube-line"></i>
                                    </div>
                                </a>
                                <a>
                                    <div className="social_link twitter">
                                        <i className="ri-twitter-line"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">Restez à jour</h3>
                        <small className="mb-20">
                            Ne manquez pas nos derniers articles de blog d'entreprise. Inscrivez-vous pour recevoir nos newsletters !
                        </small>
                        <div className="widget-wrap">
                            <input
                                type="email"
                                className="form-control mt-10 mb-20"
                                id="exampleFormControlInput1"
                                placeholder="name@example.com"
                            />
                            <a className="btn w-100 btn-secondary sweep_letter sweep_top">
                                <div className="inside_item">
                                    <span data-hover="Join with us!">Rejoignez-nous !</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}

export default Sidebar;
