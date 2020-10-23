import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const MyNavbar = () => {
    return (
        <div className="container">
            <Navbar expand="md" variant="light">
                <Navbar.Brand href="#home">
                    <img src={logo} style={{ height: '50px' }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="ml-3" href="#home">Home</Nav.Link>
                    <Nav.Link className="ml-3" href="#features">Our Service</Nav.Link>
                    <Nav.Link className="ml-3" href="#pricing">Client Feedback</Nav.Link>
                    <Nav.Link className="ml-3" href="#">Contact Us</Nav.Link>
                    <Nav.Link className="ml-3" href="#">
                        <Link to="/login">
                            <Button variant="dark"> Login</Button>
                        </Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MyNavbar;