import { Container, Row, Col } from "react-bootstrap";

export default function CarryInPolicy() {

    return (
        <Container className="mt-4" style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 style={{ marginTop: 40 }}>Fan Code of Conduct</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
                </Row>
                <Row style={{ textAlign: "left" }}>
                    <Col xs="auto"></Col>
                    <Col>
                        <p>The Big Money Ballin’ organization is committed to delivering a safe, respectful, and electric gameday environment for all guests. Whether you’re attending a matchup at Big Money Field, visiting our training facilities, or enjoying events throughout the Big Money campus, irresponsible or disruptive behavior will not be tolerated.</p>
                        <p>Any fan who violates these expectations may be subject to ejection from the stadium or facility, loss of ticket privileges, and/or arrest. The following actions are strictly prohibited at Big Money Field, Big Money Training Grounds, or any location operated by the Big Money Ballin' franchise:</p>
                        <h3 style={{ marginTop: 60 }}>Prohibited Behavior</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <ul>
                            <li>Unruly, disruptive, or illegal conduct of any kind.</li>
                            <li>Foul, abusive, or obscene gestures, language, or clothing, including—but not limited to—comments or actions targeting a person’s race, ethnicity, color, gender, religion, creed, disability, age, sexual orientation, gender identity/expression, or national origin. This also includes language or gestures intended to provoke confrontations or incite physical altercations.</li>
                            <li>Wearing indecent or inappropriate clothing or displaying offensive signs.</li>
                            <li>Verbal or physical harassment of other fans, players, team personnel, or stadium staff.</li>
                            <li>Interference with gameplay or stadium operations, including throwing objects onto the field or entering restricted areas.</li>
                            <li>Intoxication or alcohol impairment that leads to irresponsible or unsafe behavior.</li>
                            <li>Failure to comply with instructions from Big Money Ballin’ staff or stadium security.</li>
                            <li>Smoking or vaping inside the stadium or indoor areas (designated smoking areas may be available outside).</li>
                            <li>Any behavior deemed unreasonable, dangerous, or inconsistent with a safe and enjoyable fan experience.</li>
                            <li>While cheering loudly is encouraged, extended standing that obstructs the view of others should be avoided. Please be mindful of fans around you and stand with the flow of the game.</li>
                        </ul>
                        <h3 style={{ marginTop: 60 }}>Consequences</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Violations of this Fan Code of Conduct may result in disciplinary action, including permanent revocation of ticket or membership privileges, regardless of whether the offender is the ticket holder of record.</p>
                        <h3 style={{ marginTop: 60 }}>Policy Status</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>The version of the Big Money Ballin’ Fan Code of Conduct posted on the official Big Money Ballin’ website is always the most current and takes precedence over printed or posted versions.</p>
                    </Col>
                    <Col xs="auto"></Col>
                </Row>
            </Row>
        </Container>
    );

}

