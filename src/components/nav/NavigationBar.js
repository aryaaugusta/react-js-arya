import {Navbar, Container, Nav, Button} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideoCamera, faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color": 'red'}}>
                    <FontAwesomeIcon icon={faVideoCamera}/> NOSTRA MOVIES
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                {/*<Navbar.Collapse id="navbarScroll">*/}
                <Nav>
                    <Nav.Link href="/movies" to="/movies" >MOVIES</Nav.Link>
                    <Nav.Link href="/tvshows" to="/tvshows">TV SHOWS</Nav.Link>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info">Register</Button>
                </Nav>
                {/*</Navbar.Collapse>*/}
            </Container>
        </Navbar>
        // </div>
    )
}

export default NavigationBar
