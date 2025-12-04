import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router";

import TeamContext from "./context/TeamContext.js";
import crest3 from "./images/crest3.png";

function AppLayout(props) {

    const { team, setTeam } = props;
    const location = useLocation();

    return (
        <Container fluid>

            <Navbar bg="success" variant="dark" fixed="top">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">
                        <img src={crest3} alt="big money ballin logo" style={{ width: '40px' }} />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="fs-5" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="News">News</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Schedule">Schedule</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Team">Team</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Field">Big Money Field</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Community">Community</Nav.Link>
                    </Nav>
                    {
                        !props.isLoggedIn ?
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} className="fs-5" to="Login" state={{ from: location.pathname }}>Login</Nav.Link>
                            </Nav>
                            :
                            <Nav className="ms-auto">
                                <NavDropdown title={localStorage.getItem("username")}>
                                    <NavDropdown.Item onClick={() => {
                                        localStorage.removeItem("username");
                                        localStorage.removeItem("isAnOwner");
                                        props.setIsLoggedIn(0);
                                        }}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                    }
                </Container>
            </Navbar>
            <div className="mt-5">
                <TeamContext.Provider value={[team, setTeam]}>
                    <Outlet />
                </TeamContext.Provider>
            </div>
        </Container>
    );
}

export default AppLayout; 
