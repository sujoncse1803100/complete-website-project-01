import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


const NavBar = ({ color }) => {

    const colorClass = {
        color: color.color
    }

    return (
        <div>
            <div>
                <Navbar bg=" text-white" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="me-auto">Allahu Akbar</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link className="navLink me-3" href="">
                                    <Link className=" text-dark" style={{ textDecoration: 'none' }} to="/">
                                        Home
                                    </Link>
                                </Nav.Link>

                                <Nav.Link className="navLink me-3" href="">
                                    <Link className=" text-dark" style={{ textDecoration: 'none' }} to="/">
                                        Patient
                                    </Link>
                                </Nav.Link>

                                <Nav.Link className="navLink me-3" href="">
                                    <Link className=" text-dark" style={{ textDecoration: 'none' }} to="/dashboard/appoinment">
                                        Dashboard
                                    </Link>
                                </Nav.Link>

                                <Nav.Link className="navLink me-3" href="">
                                    <Link className={`navText ${colorClass.color}`} style={{ textDecoration: 'none' }} to="/">
                                        Admin
                                    </Link>
                                </Nav.Link>

                                <Nav.Link className="navLink me-3" href="">
                                    <Link className={`navText ${colorClass.color}`} style={{ textDecoration: 'none' }} to="/">
                                        Blog
                                    </Link>
                                </Nav.Link>

                                <Nav.Link className="navLink me-3" href="">
                                    <Link className={`navText ${colorClass.color}`} style={{ textDecoration: 'none' }} to="/">
                                        Contact
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;