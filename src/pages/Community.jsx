import { Button, Col, Row, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router";

import kmb from "../images/kelcemayfieldbarkley.png";
import fans from "../images/fans.png";
import adamsstafford from "../images/adamsstafford.png";

export default function Community(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const [isAnOwner, setIsAnOwner] = useState(localStorage.getItem("isAnOwner") ?? 0);

    return <>
        <Row className="justify-content-center">
            <h1 style={{ marginTop: 40 }}>Community</h1>
            <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
        </Row>
        <Card className="shadow-sm" style={{ marginBottom: 80 }}>
            <Row className='mt-3'>
                <Col style={{ marginLeft: 40 }}>
                    <h1 className='mt-4 mb-3'>Upcoming Events</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", margin: "0 auto 1.5rem" }} />
                    <p style={{
                        lineHeight: "1.5",
                        maxWidth: "600px",
                        margin: "auto"
                    }}
                    >Get a first look at what’s ahead for Big Money Ballin’. From fan-driven jersey decisions to special appearances and game-day festivities, each event gives you a chance to help shape the season. Explore what’s coming up and be part of the excitement before it even kicks off.</p>
                    <Button
                        className='my-5'
                        variant='success'
                        onClick={() => navigate("/Events", { state: { from: location.pathname } })}
                    >Our Events</Button>
                </Col>
                <Col>
                    <img
                        src={adamsstafford}
                        alt="adams and stafford"
                        style={{ width: 300 }}
                        className='my-3'
                    ></img>
                </Col>
            </Row>
        </Card>
        <Card className="shadow-sm" style={{ marginBottom: 80 }}>
            <Row className='mt-3'>
                <Col>
                    <img
                        src={fans}
                        alt="fans photo"
                        style={{ width: 300 }}
                        className='my-3'
                    ></img>
                </Col>
                <Col style={{ marginLeft: 40 }}>
                    <h1 className='mt-4 mb-3'>Fan Polls</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", margin: "0 auto 1.5rem" }} />
                    <p style={{
                        lineHeight: "1.5",
                        maxWidth: "600px",
                        margin: "auto"
                    }}
                    >From jersey designs to halftime entertainment, your vote helps shape the direction of the team. Cast your votes and check back often for new polls.</p>
                    <Button
                        className='my-5'
                        variant='success'
                        onClick={() => navigate("/Polls", { state: { from: location.pathname } })}
                    >Cast Your Votes</Button>
                </Col>
            </Row>
        </Card>
        <Card className="shadow-sm" style={{ marginBottom: 80 }}>
            <Row className='mt-3'>
                <Col style={{ marginLeft: 40 }}>
                    <h1 className='mt-4 mb-3'>Become an Owner</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", margin: "0 auto 1.5rem" }} />
                    <p style={{
                        lineHeight: "1.5",
                        maxWidth: "600px",
                        margin: "auto"
                    }}
                    >Big Money Ballin’ offers fans a chance to become part of the team itself. Becoming an Owner isn’t about profits or payouts — it’s about belonging, identity, and family. Owners have their name engraved in our gold brick road outside Big Money Field, special voting rights on select team decisions throughout the season, and exclusive access to events and behind-the-scenes updates. Whether you’re here for the culture, the owner perks, or just to flex your name on the ownership ledger, this is your chance to join something bigger. Own a piece of the story.</p>
                    {
                        props.isLoggedIn ?
                            isAnOwner ?
                                <Button
                                    className='my-5'
                                    variant='success'
                                >Check out Your Perks</Button>
                                :
                                <Button
                                    className='my-5'
                                    variant='success'
                                    onClick={() => {
                                        alert("Congratulations! You are now an owner!");
                                        localStorage.setItem("isAnOwner", 1);
                                        setIsAnOwner(1);
                                    }}
                                >Become an Owner</Button>

                            :
                            <Button
                                className='my-5'
                                variant='success'
                                onClick={() => navigate("/Login", { state: { from: location.pathname } })}
                            >Become an Owner</Button>
                    }
                </Col>
                <Col>
                    <img
                        src={kmb}
                        alt="kelce mayfield barkley"
                        style={{ width: 300 }}
                        className='my-3'
                    ></img>
                </Col>
            </Row>
        </Card>
    </>
}

