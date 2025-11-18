import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

import TeamContext from '../context/TeamContext';
import crest3 from "../images/crest3.png";

export default function Schedule() {

    const [team] = useContext(TeamContext);

    if (!team?.weeks) return <div>Loading...</div>;

    return (
        <Container style={{ paddingTop: 20, alignItems: "center" }}>
            <h1 style={{ padding: 20 }}>Schedule</h1>
            <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", margin: "0 auto 1.5rem", padding: 20 }} />
            {Object.keys(team.weeks).map(weekNum => {
                const week = team.weeks[weekNum];
                const matchup = week.matchup;

                const homeTeam = team.teams["Big Money Ballin'"][0];
                const oppTeam = team.teams[matchup.opponent]?.[0] ?? {};

                return (
                    <Card key={weekNum} className='p-3' style={{ backgroundColor: "white", width: '1200px', margin: 10 }}>
                        <Row>
                            <Col xs="auto" className="d-flex flex-column justify-content-center">
                                <h5>Week {weekNum}</h5>
                            </Col>
                            <Col className="d-flex flex-column justify-content-center">
                                <h4>{matchup.opponent}</h4>
                                {`${oppTeam.wins ?? 0}-${oppTeam.losses ?? 0}${oppTeam.ties ? `-${oppTeam.ties}` : ""}`}
                            </Col>
                            <Col className="d-flex flex-column justify-content-center" xs='auto' style={{ margin: 40 }}>
                                {matchup.your_score > matchup.opponent_score ? <h2>W</h2> : matchup.your_score === matchup.opponent_score ? <h2> </h2> : <h2>L</h2>}
                            </Col>
                            <Col className="d-flex flex-column justify-content-center">
                                <Row className='justify-content-center'>
                                    <Col xs='auto'>
                                        <h1 style={{ color: matchup.your_score > matchup.opponent_score ? "green" : "black" }}>{matchup.your_score}</h1>
                                    </Col>
                                    <Col xs='auto'>
                                        <h1>-</h1>
                                    </Col>
                                    <Col xs='auto'>
                                        <h1 style={{ color: matchup.your_score < matchup.opponent_score ? "red" : "black" }}>{matchup.opponent_score}</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <h6>{`Projected: ${matchup.your_projected} - ${matchup.opponent_projected}`}</h6>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                );
            })}
        </Container >
    )
}
