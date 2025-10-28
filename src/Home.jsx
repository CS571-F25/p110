import React, { useContext, useEffect, useState } from 'react';
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useOutletContext } from "react-router-dom";
import TeamContext from './TeamContext';

export default function Home(props) {

    const [team, setTeam] = useContext(TeamContext);

    const [week, setWeek] = useState(team.week);
    const [homeScore, setHomeScore] = useState(0);
    const [oppScore, setOppScore] = useState(0);
    const [oppName, setOppName] = useState("OPPONENT");
    const [homeWins, setHomeWins] = useState(0);
    const [homeLosses, setHomeLosses] = useState(0);
    const [homeTies, setHomeTies] = useState(0);
    const [oppWins, setOppWins] = useState(0);
    const [oppLosses, setOppLosses] = useState(0);
    const [oppTies, setOppTies] = useState(0);
    const [oppLogo, setOppLogo] = useState("./src/crest3.png");
    const [homePredicted, sethomePredicted] = useState(0);
    const [oppPredicted, setOppPredicted] = useState(0);

    return <>
        <img src="./src/banner-xshort.png" className='p-3' style={{ width: '800px'}}></img>
        <Container className='p-3' style={{ backgroundColor: "white", width: '1200px' }}>
            <h5>Week {week}</h5>
            <Row>
                <Col xs="auto">
                    <img src="./src/crest3.png" style={{ width: '50px' }}></img>
                </Col>
                <Col>
                    <h4>{team.team_name}</h4>
                    {`${homeWins}-${homeLosses}${homeTies === 0 ? "" : "-" + homeTies}`}
                </Col>
                <Col>
                    <h1>{homeScore}</h1>
                    <h6>{homePredicted}</h6>
                </Col>
                <Col>
                    <h1>{oppScore}</h1>
                    <h6>{oppPredicted}</h6>
                </Col>
                <Col>
                    <h4>{oppName}</h4>
                    {`${oppWins}-${oppLosses}${oppTies === 0 ? "" : "-" + oppTies}`}
                </Col>
                <Col xs='auto'>
                    <img src={oppLogo} style={{ width: '50px' }}></img>
                </Col>
            </Row>

            <Row className="text-center">
            </Row>
        </Container>
    </>
}