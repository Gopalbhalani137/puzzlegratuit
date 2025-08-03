import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Navbar, Nav } from 'react-bootstrap';
import img1 from '../assets/logo.png';

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
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
