import { Button, Col, Row, Card } from "react-bootstrap";
import { useState, useEffect } from 'react';

import kmb from "../images/kelcemayfieldbarkley.png";
import { useNavigate } from "react-router-dom";

export default function BecomeAnOwner(props) {

    const navigate = useNavigate();
    const [isAnOwner, setIsAnOwner] = useState(localStorage.getItem("isAnOwner") ?? 0);

    return <Card>
        <Row className='mt-3'>
            <Col style={{ marginLeft: 40 }}>
                <h1 className='mt-4 mb-3'>Become an Owner</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", margin: "0 auto 1.5rem" }} />
                <p style={{
                    lineHeight: "1.5",
                    maxWidth: "600px",
                    margin: "auto"
                }}
                >Just like the legendary Green Bay Packers model, Big Money Ballin’ offers fans a chance to become part of the team itself. Becoming an Owner isn’t about profits or payouts — it’s about belonging, identity, and family. Owners receive official recognition on our roster page, special voting rights on select team decisions throughout the season, and exclusive access to behind-the-scenes updates. Whether you’re here for the culture, the camaraderie, or just to flex your name on the ownership ledger, this is your chance to join something bigger. Own a piece of the story.</p>
                {
                    props.isLoggedIn ?
                        isAnOwner ?
                            <Button
                                className='my-5'
                                variant='success'
                            >Thank You For Becoming an Owner</Button>
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
                            onClick={() => navigate("/Login")}
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
    </Card >
}

