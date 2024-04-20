import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarText, NavLink} from "react-bootstrap";
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
                <NavbarText>
                    Signed in as: Adrian
                </NavbarText>
            </NavbarCollapse>
        </Container>
    </Navbar>)
}