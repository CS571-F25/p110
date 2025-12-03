import { Container, Row, Col } from "react-bootstrap";

import StadiumMap from '../../images/stadiummap2.jpg';

export default function CarryInPolicy() {

    return (
        <Container className="mt-4" style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 style={{ marginTop: 40 }}>Stadium Map and Seating</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 0, marginTop: 10 }} />
                </Row>
                <Row className='justify-content-center'>
                    <img alt={"stadium map"} src={StadiumMap}></img>
                </Row>
                <Row style={{ textAlign: "left" }}>
                    <Col style={{ marginLeft: 100 }}>
                        <h3>2025 Club Season Tickets</h3>
                        <p>Preseason/Regular season</p>
                        <ul>
                            <li>Upper level: $168–$199 / $336–$389</li>
                            <li>Lower level: $239–$276 / $476–$554</li>
                        </ul>
                    </Col>
                    <Col style={{ marginLeft: 100 }}>
                        <h3>2025 General Season Tickets</h3>
                        <p>Preseason/Regular season</p>
                        <ul>
                            <li>Upper level: $69 / $139</li>
                            <li>Lower level: $85 / $169</li>
                        </ul>
                    </Col>
                </Row>
                <Row style={{ textAlign: "left", marginTop: 80 }}>
                    <Col xs='auto'></Col>
                    <Col>
                        <p>Please note that all guests, regardless of age—including infants—must have a valid ticket to enter Big Money Field on gameday. If you and your child become separated at any point, please alert the nearest member of stadium security or guest services immediately so assistance can be provided. While other venues may offer different ticketing policies for young children, the seating layout inside Big Money Field—featuring its close-row configurations and compact design—requires that every individual occupy their own ticketed space. Even a small child seated on a lap can obstruct movement within a row and limit the ability of other fans to safely and efficiently reach their seats during the event. We appreciate your understanding and cooperation in helping maintain a safe and enjoyable experience for all guests.</p>
                    </Col>
                    <Col xs='auto'></Col>
                </Row>
            </Row>
        </Container>
    );

}

