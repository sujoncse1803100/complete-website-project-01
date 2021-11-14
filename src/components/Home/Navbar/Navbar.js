import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <div>
            <div>
                <Navbar bg=" text-white" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="me-auto">Allahu Akbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className="navLink me-3" href="#home">Home</Nav.Link>
                                <Nav.Link className="navLink me-3" href="#link">About</Nav.Link>
                                <Nav.Link className="navLink me-3" href="#home">Dental Services</Nav.Link>
                                <Nav.Link className="navLink me-3 text-white" href="#link">Reviews</Nav.Link>
                                <Nav.Link className="navLink me-3 text-white" href="#home">Blog</Nav.Link>
                                <Nav.Link className="navLink me-3 text-white" href="#link">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;