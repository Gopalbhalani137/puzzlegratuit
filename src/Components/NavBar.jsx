import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Navbar, Nav } from 'react-bootstrap';
import img1 from '../assets/logo.png';

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Site Navigation | Puzzle &amp; Blog</title>
                <meta
                    name="description"
                    content="Naviguez parmi nos puzzles, notre blog, et découvrez à propos de nous, contactez-nous ou explorez nos termes et conditions."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Site Navigation | Puzzle &amp; Blog"
                />
                <meta
                    property="og:description"
                    content="Trouvez facilement puzzles, blog, et plus encore via notre barre de navigation."
                />
                <link rel="canonical" href={window.location.href} />
            </Helmet>

            <Navbar
                bg="light"
                expand="lg"
                expanded={mobileMenuOpen}
                className="mb-3 shadow-sm"
            >
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={img1}
                            alt="logo"
                            style={{ height: '50px' , marginTop: '10px'}}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="navbar-nav"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center gap-3">
                            <Nav.Link className="text-grey" href="/jigsaw">
                                Catégorie
                            </Nav.Link>
                            <Nav.Link className="text-grey" href="/blog">
                                Blogue
                            </Nav.Link>
                            <Nav.Link className="text-grey" href="/about-us">
                                À propos de nous
                            </Nav.Link>
                            <Nav.Link className="text-grey" href="/contact">
                                Contactez-nous
                            </Nav.Link>
                            <Nav.Link className="text-grey" href="/terms">
                                Termes et conditions
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
