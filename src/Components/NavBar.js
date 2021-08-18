import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Gamer+</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Buy</Nav.Link>
                            <Nav.Link href="#pricing">Sell</Nav.Link>
                            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Peripherals</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Monitors</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Desktops</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Browse Components"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="primary">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link href="#deets">Sign In</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default NavBar;
