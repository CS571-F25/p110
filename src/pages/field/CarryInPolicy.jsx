import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export default function CarryInPolicy() {

    return (
        <Container className="m-4" style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 style={{ marginTop: 40 }}>Carry-In Policy & Security</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
                </Row>
                <Row style={{ textAlign: "left" }}>
                    <Col xs="auto"></Col>
                    <Col>
                        <p>To ensure a safe and elite experience inside Big Money Field, security staff and team personnel are stationed at every entrance gate. All fans and their personal items are subject to inspection upon entry. If a guest chooses not to consent to a search, entry will be denied. Please note that carry-in rules may vary from event to event depending on security needs, and final decisions on permitted items are at the discretion of stadium security officers.</p>
                        <p>Additional clothing, blankets, and cold-weather gear are allowed if carried in loosely. Small cameras, binoculars, and cell phones are permitted when not stored inside a bag. For late-season cold games, battery-powered heated clothing is allowed. Traditional stadium seats with backs are permitted as long as they do not exceed 18" in width and contain no pockets, zippers, hidden compartments, or storage features. Oversized seats, seats with armrests, or any attachments that obstruct neighboring guests are not allowed.</p>
                        <h3 style={{ marginTop: 60 }}>Approved Clear Bag Guidelines</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>To streamline entry and comply with league-standard security protocols, fans may bring one clear bag into the stadium.</p>
                        <p>Approved clear bags include:</p>
                        <ul>
                            <li>Clear plastic, vinyl, or PVC bags not exceeding 12" x 6" x 12" (including clear backpacks, clear fanny packs, and clear cinch bags).</li>
                            <li>Bags may not contain buckles, grommets, decorative hardware, or any design that obstructs visibility.</li>
                            <li>A one-gallon clear freezer bag is permitted.</li>
                            <li>Logos are allowed on one side of the bag only.</li>
                            <li>One small, non-clear clutch up to 4.5" x 6.5" may accompany the approved clear bag.</li>
                        </ul>
                        <p>Any non-approved bag or item that does not meet these guidelines will be denied entry. Guests must return prohibited bags to their vehicle or they will be confiscated and discarded.</p>
                        <h3 style={{ marginTop: 60 }}>Weapons Policy</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>In accordance with Wisconsin law and team policy, Big Money Field strictly prohibits all weapons, including firearms, both inside the stadium and throughout team-controlled property, including parking areas.</p>
                        <h3 style={{ marginTop: 60 }}>Entry Screening</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />

                        <p>All fans entering the stadium will pass through walk-through metal detectors. Unlike airport screening, you do not need to remove jackets, belts, wallets, keys, coins, watches, or similar items. Fans will simply walk through the detector with their belongings.</p>
                    </Col>
                    <Col xs="auto"></Col>
                </Row>
            </Row>
        </Container>
    );

}

