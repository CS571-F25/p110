import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Col, Row, Alert } from "react-bootstrap";

export default function BecomeAnOwner() {

    return <>
        <Row className='mt-3'>
            <Col>
                <h1 className='mt-4 mb-3'>Become an owner!</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", margin: "0 auto 1.5rem" }} />
                <p style={{
                    lineHeight: "1.5",
                    maxWidth: "600px",
                    margin: "auto"
                }}
                >Just like the legendary Green Bay Packers model, Big Money Ballin’ offers fans a chance to become part of the team itself. Becoming an Owner isn’t about profits or payouts — it’s about belonging, identity, and family. Owners receive official recognition on our roster page, special voting rights on select team decisions throughout the season, and exclusive access to behind-the-scenes updates. Whether you’re here for the culture, the camaraderie, or just to flex your name on the ownership ledger, this is your chance to join something bigger. Own a piece of the story.</p>
                <Button
                    className='my-5'
                    variant='success'
                    onClick={() => alert("Congratulations! You are now an owner!")}
                >Become an Owner</Button>
            </Col>
            <Col>
                <img
                    src="./src/kelcemayfieldbarkley.png"
                    alt="kelce mayfield barkley"
                    style={{ width: 300 }}
                    className='my-3'
                ></img>
            </Col>
        </Row>
    </>
}

