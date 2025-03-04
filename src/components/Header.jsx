import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
    return (
        <header>
            <Navbar className="nav">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand href="#home">
                        <img src="/logo.webp" className="brand" alt="" />
                    </Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
