import { useContext, useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap";
import TeamContext from '../context/TeamContext';

import crest3 from "../images/crest3.png";

const imageModules = import.meta.glob('../images/*', { eager: true });

const imgMap = Object.fromEntries(
    Object.entries(imageModules).map(([path, mod]) => {
        const fileName = path.split("/").pop();
        return [fileName, mod.default];
    })
);

export default function Home(props) {

    const [team, setTeam] = useContext(TeamContext);

    const week = team?.week?.toString() ?? "0";
    const [homeScore, setHomeScore] = useState(0);
    const [oppScore, setOppScore] = useState(0);
    const [oppName, setOppName] = useState("OPPONENT");
    const [homeWins, setHomeWins] = useState(0);
    const [homeLosses, setHomeLosses] = useState(0);
    const [homeTies, setHomeTies] = useState(0);
    const [oppWins, setOppWins] = useState(0);
    const [oppLosses, setOppLosses] = useState(0);
    const [oppTies, setOppTies] = useState(0);
    const [oppLogo, setOppLogo] = useState(crest3);
    const [homePredicted, sethomePredicted] = useState(0);
    const [oppPredicted, setOppPredicted] = useState(0);

    useEffect(() => {
        if (!team.weeks || !team.weeks[week]) return;

        setHomeScore(team.weeks[week].matchup.your_score);
        sethomePredicted(team.weeks[week].matchup.your_projected);
        setOppScore(team.weeks[week].matchup.opponent_score);
        setOppName(team.weeks[week].matchup.opponent);
        setOppPredicted(team.weeks[week].matchup.opponent_projected);
    }, [team, week]);

    useEffect(() => {
        const myTeam = team?.teams?.["Big Money Ballin'"]?.[0];
        if (!myTeam) return;
        setHomeWins(myTeam.wins);
        setHomeLosses(myTeam.losses);
        setHomeTies(myTeam.ties);

        const oppTeam = team?.teams?.[oppName]?.[0];
        if (!oppTeam) return;
        setOppWins(oppTeam.wins);
        setOppLosses(oppTeam.losses);
        setOppTies(oppTeam.ties);
        setOppLogo(oppTeam.logo);
    }, [team, oppName]);

    return <Row className='justify-content-center'>
        <Col className='p-3'>
            <Row className='justify-content-center'>
                <h1 style={{ marginTop: 20 }}>Official Home of Big Money Ballin' Football</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 10, marginTop: 10 }} />
            </Row>
            <Row style={{ marginBottom: 200, marginLeft: 20, marginRight: 20, marginTop: 100 }}>
                <Card style={{ backgroundColor: "white" }}>
                    <h5 style={{ marginTop: 10, backgroundColor: "white" }}>Week {week} Matchup</h5>
                    <Row style={{ marginBottom: 30 }}>
                        <Col xs="auto">
                            <img alt={"big money ballin logo"} src={crest3} style={{ width: '50px' }}></img>
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
                            <img alt={"opponent logo"} src={imgMap[oppLogo]} style={{ width: '50px' }}></img>
                        </Col>
                    </Row>

                    <Row className="text-center">
                    </Row>
                </Card>
            </Row>
        </Col>
    </Row>
}