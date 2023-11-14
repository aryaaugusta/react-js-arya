import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div className="navbar-title">
            <Navbar bg="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">ARYA AUGUSTA FILMS</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/movies">MOVIES</Nav.Link>
                        <Nav.Link href="/tvshows">TV SHOWS</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
