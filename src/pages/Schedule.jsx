import { useContext } from 'react';
import { Row, Col, Card } from "react-bootstrap";

import TeamContext from '../context/TeamContext';

export default function Schedule() {

    const [team] = useContext(TeamContext);

    const imageModules = import.meta.glob('../images/*', { eager: true });

    const imgMap = Object.fromEntries(
        Object.entries(imageModules).map(([path, mod]) => {
            const fileName = path.split("/").pop();
            return [fileName, mod.default];
        })
    );

    if (!team?.weeks) return <div>Loading...</div>;

    return (
        <Row className='justify-content-center' style={{ paddingTop: 20 }}>
            <Row className='justify-content-center'>
                <h1 style={{ marginTop: 20 }}>Schedule</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginTop: 10, padding: 20 }} />
            </Row>
            {Object.keys(team.weeks).map(weekNum => {
                const week = team.weeks[weekNum];
                const matchup = week.matchup;

                const homeTeam = team.teams["Big Money Ballin'"][0];
                const oppTeam = team.teams[matchup.opponent]?.[0] ?? {};

                return (
                    <Card key={weekNum} className='p-3' style={{ backgroundColor: "white", width: '1200px', margin: 10 }}>
                        <Row className='justify-content-center'>
                            <Col xs="auto" className="d-flex flex-column justify-content-center">
                                <h5>Week {weekNum}</h5>
                            </Col>
                            <Col xs='auto' className="d-flex flex-column justify-content-center">
                                <img style={{ width: 50, marginLeft: 100 }} alt={"opponent team logo"} src={imgMap[oppTeam.logo]}></img>
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
        </Row >
    )
}
