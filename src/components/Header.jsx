import "../assets/style/header.scss";
import logo from "../assets/img/logo.webp";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
    return (
        <header>
            <Navbar className="nav toggle" expand="md">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home">
                        <img src={logo} className="brand" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
