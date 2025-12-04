import { Button, Col, Row, Card, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router";

import polls from '../jsons/polls.json';

export default function Polls(props) {

    const location = useLocation();
    const navigate = useNavigate();
    const [isAnOwner, setIsAnOwner] = useState(localStorage.getItem("isAnOwner") ?? 0);
    console.log(polls);

    return <Container>
        <Row className="justify-content-center" style={{ marginBottom: 40 }}>
            <h1 style={{ marginTop: 40 }}>Cast Your Vote</h1>
            <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 30, marginTop: 10 }} />
            <p style={{ marginBottom: 30 }}>We've narrowed our options down to the top five. You make the final decision.</p>
        </Row>

        {Object.keys(polls).map((c, i) => {
            return <Card key={i} className="shadow-sm" style={{ marginBottom: 40, padding: 40 }}>
                <Row className='mt-3 justify-content-center'>
                    <Col style={{ marginRight: 20, textAlign: 'left' }}>
                        <h2 className='mb-3'>{polls[c].title}</h2>
                        <p style={{
                            lineHeight: "1.5",
                            maxWidth: "600px",
                            margin: "auto",
                            textAlign: "left"
                        }}
                        >{polls[c].description}</p>
                    </Col>
                    <Col>
                        {
                            Object.keys(polls[c].options).map((d) => {
                                return <Row>
                                    {
                                        props.isLoggedIn ?
                                            <Button className='m-1' key={polls[c].options[d]} variant="success" xs='auto'>{polls[c].options[d]}</Button>
                                            :
                                            <Button className='m-1' key={polls[c].options[d]} disabled variant="success" xs='auto'>{polls[c].options[d]}</Button>
                                    }
                                </Row>
                            })
                        }
                    </Col>
                </Row>
            </Card>
        })}


    </Container>
}



