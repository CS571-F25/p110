import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import TeamContext from "./TeamContext.js";

function AppLayout(props) {

    const { team, setTeam } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(0);

    return (
        <div>
            <Navbar bg="success" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src="./src/crest3.png" alt="crest3" style={{ width: '40px' }} />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="fs-5" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="News">News</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Photos">Photos</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Schedule">Schedule</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="Team">Team</Nav.Link>
                        <Nav.Link as={Link} className="fs-5" to="BecomeAnOwner">Become an Owner</Nav.Link>
                    </Nav>
                    {isLoggedIn ?
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className="fs-5" to="/Login">Login</Nav.Link>
                        </Nav>
                        :
                        <Nav className="ms-auto">
                            <NavDropdown title="Account">
                                <NavDropdown.Item as={Link} to={"/Login"}>Logout</NavDropdown.Item>
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
        </div>
    );
}

export default AppLayout; 
