import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div className="navbar-title">
            <Navbar bg="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">ARYA AUGUSTA FILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
