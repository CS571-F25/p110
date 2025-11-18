import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router-dom";
import TeamContext from '../context/TeamContext';


export default function Team() {

    const [team, setTeam] = useContext(TeamContext);
    useEffect(() => {
        if (team?.week) {
            setCurrWeek(team.week.toString());
        }
    }, [team]);
    const [currWeek, setCurrWeek] = useState("1");

    if (!team || !team.weeks) {
        return <h1>Loading Team...</h1>;
    }

    return <>
        <Row className='justify-content-center' style={{ margin: 20 }}>
            <Row className='justify-content-center'>
                <h1 style={{ marginTop: 40 }}>Team</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginTop: 10, marginBottom: 60 }} />
            </Row>
            <Card className='justify-content-center'>
                <Row className='justify-content-center' style={{ marginTop: -10 }}><h5>Week</h5></Row>
                <Row style={{ backgroundColor: "white", padding: 10 }} className='justify-content-center'>
                    {
                        Object.keys(team.weeks).map(week =>
                            <Col key={week} className="d-flex flex-column justify-content-center">
                                <Button variant="success" disabled={week === currWeek} onClick={() => setCurrWeek(week)}>{week}</Button>
                            </Col>
                        )
                    }
                </Row>
            </Card>
        </Row>
        <Row className='justify-content-center'>
            <Row className='justify-content-center'>
                <h3 style={{ marginTop: 40 }}>Starters</h3>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 25 }} />
            </Row>
            <Row className='justify-content-center'>
                <Col style={{ marginLeft: 10 }} xs='auto'>
                    <Card style={{ padding: 8 }}>Position</Card>
                    {
                        team.weeks[currWeek].players.map(player =>
                            <Card key={player.name + player.position} style={{ padding: 8 }}>
                                {player.position}
                            </Card>
                        )
                    }
                </Col>
                <Col>
                    <Row>
                        <Card style={{ padding: 8 }}>
                            <Row>
                                <Col>Name</Col>
                                <Col>Team</Col>
                                <Col>Projected Points</Col>
                                <Col>Final Points</Col>
                            </Row>
                        </Card>
                        {
                            team.weeks[currWeek].players.map(player =>
                                <Card key={player.name} style={{ padding: 8 }}>
                                    <Row>
                                        <Col>{player.name}</Col>
                                        <Col>{player.team}</Col>
                                        <Col></Col>
                                        <Col>{player.points}</Col>
                                    </Row>
                                </Card>
                            )
                        }
                    </Row>
                </Col>
                <Col xs="auto"></Col>
            </Row>
        </Row>
        <Row className='justify-content-center'>
            <h3 style={{ marginTop: 50 }}>Bench</h3>
            <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 25 }} />
            <Row>
                <Card style={{ padding: 8 }}>
                    <Row>
                        <Col>Name</Col>
                        <Col>Position</Col>
                        <Col>Team</Col>
                        <Col>Points</Col>
                    </Row>
                </Card>
                {
                    team.weeks[currWeek].bench.map(player =>
                        <Card key={player.name} style={{ padding: 8 }}>
                            <Row>
                                <Col>{player.name}</Col>
                                <Col>{player.position}</Col>
                                <Col>{player.team}</Col>
                                <Col>{typeof player.points === "string" ? <strong style={{ color: "red" }}>{player.points}</strong> : player.points}</Col>
                            </Row>
                        </Card>
                    )
                }
            </Row>
            <Col xs="auto"></Col>
        </Row>
    </>
} 
