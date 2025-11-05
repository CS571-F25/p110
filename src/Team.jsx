import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router-dom";
import TeamContext from './TeamContext';


export default function Team() {

    const [team, setTeam] = useContext(TeamContext);
    const [currWeek, setCurrWeek] = useState(1);

    if (!team || !team.weeks) {
        return <h1>Loading Team...</h1>;
    }

    return <>
        <Row className='m-4'>
            <h1 className='p-5'>Team Week {currWeek}</h1>
            <Col />
            {Object.keys(team.weeks).map(week =>
                <Col key={week}>
                    <Button variant="success" disabled={week === currWeek} onClick={() => setCurrWeek(week)}>Week {week}</Button>
                </Col>
            )}
            <Col />
        </Row>
        <Row>
            <Col xs="auto">
                <Card><h4>Starters</h4></Card>
            </Col>
            <Col xs="auto">
                <Card className='p-2'>Position</Card>
                {
                    team.weeks[currWeek].players.map(player =>
                        <Card key={player.name + player.position} className='p-2'>
                            {player.position}
                        </Card>
                    )
                }
            </Col>
            <Col>
                <Row>
                    <Card className='p-2'>
                        <Row>
                            <Col>Name</Col>
                            <Col>Team</Col>
                            <Col>Projected Points</Col>
                            <Col>Final Points</Col>
                        </Row>
                    </Card>
                    {
                        team.weeks[currWeek].players.map(player =>
                            <Card key={player.name} className='p-2'>
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
        <Row className='mt-4'>
            <Col xs="auto">
                <Card><h4>Bench</h4></Card>
            </Col>
            <Col>
                <Row>
                    <Card className='p-2'>
                        <Row>
                            <Col>Name</Col>
                            <Col>Position</Col>
                            <Col>Team</Col>
                            <Col>Points</Col>
                        </Row>
                    </Card>
                    {
                        team.weeks[currWeek].bench.map(player =>
                            <Card key={player.name} className='p-2'>
                                <Row>
                                    <Col>{player.name}</Col>
                                    <Col>{player.position}</Col>
                                    <Col>{player.team}</Col>
                                    <Col>{player.points}</Col>
                                </Row>
                            </Card>
                        )
                    }
                </Row>
            </Col>
            <Col xs="auto"></Col>
        </Row>
    </>
} 
