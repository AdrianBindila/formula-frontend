import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarText, NavDropdown, NavLink} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTractor} from "@fortawesome/free-solid-svg-icons";

export function TopNavbar() {
    return (<Navbar bg="danger" data-bs-theme="danger">
        <Container>
            <NavbarBrand href="/home"><FontAwesomeIcon icon={faTractor}/> Formula Friends</NavbarBrand>
            <Nav className="me-auto">
                <NavLink href="/home">Home</NavLink>
                <NavLink href="/betting">Betting</NavLink>
                <NavLink href="/standings">Standings</NavLink>
            </Nav>
            <NavbarCollapse className="justify-content-end">
                <NavDropdown title={"Signed in as Adrian"} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
                </NavDropdown>
            </NavbarCollapse>
        </Container>
    </Navbar>)
}