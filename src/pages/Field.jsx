import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

import StadiumMap from '../images/stadiummap2.jpg';
import Stadium from '../images/stadcovered.png';
import Parking from '../images/parking.jpg';
import Ballin3D from '../images/ballin3d3.png';
import Fans from '../images/fans3.png';
import Tailgate from '../images/tailgate.png';

export default function Field() {

    const navigate = useNavigate();

    return <Container className="mt-4">
        <Row className="justify-content-center">
            <Row className="justify-content-center">
                <h1 style={{ marginTop: 40 }}>Big Money Field</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
            </Row>
            <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="shadow-sm">
                    <Card.Img style={{ height: "280px", objectFit: "cover" }} alt={"fans tailgating"} src={Tailgate}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: 20 }}>Gameday Information</Card.Title>
                        <Button
                            variant="success"
                            onClick={() => navigate("/KnowBeforeYouGo")}
                        >
                            View More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">

                <Card className="shadow-sm">
                    <Card.Img style={{ height: "280px", objectFit: "cover" }} alt={"stadium map"} src={StadiumMap}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: 20 }}>Stadium Map</Card.Title>
                        <Button
                            variant="success"
                            onClick={() => navigate("/StadiumMap")}
                        >
                            View More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">

                <Card className="shadow-sm">
                    <Card.Img style={{ height: "280px", objectFit: "cover" }} alt={"parking lot map"} src={Parking}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: 20 }}>Parking</Card.Title>
                        <Button
                            variant="success"
                            onClick={() => navigate("/Parking")}
                        >
                            View More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="shadow-sm">
                    <Card.Img style={{ height: "280px", objectFit: "cover" }} alt={"fans in the stands"} src={Fans}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: 20 }}>Fan Code of Conduct</Card.Title>
                        <Button
                            variant="success"
                            onClick={() => navigate("/FanCodeOfConduct")}
                        >
                            View More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">
                <Card className="shadow-sm">
                    <Card.Img style={{ height: "280px", objectFit: "cover" }} alt={"stadium photo"} src={Stadium}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: 20 }}>Carry-In Policy</Card.Title>
                        <Button
                            variant="success"
                            onClick={() => navigate("/CarryInPolicy")}
                        >
                            View More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={6} lg={4} className="mb-4">

                <Card className="shadow-sm">
                    <Card.Img style={{ height: "280px", objectFit: "cover" }} alt={"big money ballin logo"} src={Ballin3D}></Card.Img>
                    <Card.Body>
                        <Card.Title style={{ marginBottom: 20 }}>Contact Us</Card.Title>
                        <Button
                            variant="success"
                            onClick={() => navigate("/ContactUs")}
                        >
                            View More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
}

