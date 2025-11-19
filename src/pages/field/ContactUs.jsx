import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export default function CarryInPolicy() {

    return (
        <Container className="m-4" style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 style={{ marginTop: 40 }}>Contact Us</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
                </Row>
                <Row style={{ textAlign: "left" }}>
                    <Col xs="auto"></Col>
                    <Col>
                        <h3 style={{ marginTop: 60 }}>Street Address</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p style={{ whiteSpace: "pre-line" }}>{"Big Money Ballin' Organization\nBig Money Field Atrium\n101 Big Money Boulevard\nBallin’ City, WI 54999"}</p>
                        <h3 style={{ marginTop: 60 }}>Mailing Address</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p style={{ whiteSpace: "pre-line" }}>{"P.O. Box 88088\nBallin’ City, WI 54990-8088"}</p>
                        <h3 style={{ marginTop: 60 }}>Phone</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <strong>General Information</strong>
                        <p style={{ whiteSpace: "pre-line" }}>{"(M–F, 8 a.m.–5 p.m.)\n(920) 444-1010"}</p>
                        <strong>Ticket Office</strong>
                        <p style={{ whiteSpace: "pre-line" }}>{"(M–F, 9 a.m.–5 p.m.)\n(866) BIG-BALL (866-244-2255)"}</p>
                        <strong>Ballin’ Pro Shop</strong>
                        <p>(800) 555-BMB1</p>
                        <strong>Fan Information Hotline</strong>
                        <p>(920) 444-2020</p>
                        <strong>Hall of Fame & Stadium Tours</strong>
                        <p>(920) 444-7771</p>
                        <strong>Book an Event</strong>
                        <p>(920) 444-8882</p>
                        <h3 style={{ marginTop: 60 }}>Fax</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <strong>Administration</strong>
                        <p>(920) 444-3300</p>
                        <strong>Community Impact & Outreach</strong>
                        <p>(920) 444-3301</p>
                        <strong>Communications & Media Relations</strong>
                        <p>(920) 444-4400</p>
                        <strong>Ticket Office</strong>
                        <p>(920) 444-5500</p>
                        <strong>Ballin’ Pro Shop</strong>
                        <p>(920) 444-6600</p>
                    </Col>
                    <Col xs="auto"></Col>
                </Row>
            </Row>
        </Container>
    );

}


