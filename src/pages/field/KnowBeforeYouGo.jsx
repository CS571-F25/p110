import { Container, Row, Col } from "react-bootstrap";

export default function CarryInPolicy() {

    return (
        <Container className="mt-4" style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 style={{ marginTop: 40 }}>Know Before You Go</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
                </Row>
                <Row style={{ textAlign: "left" }}>
                    <Col xs="auto"></Col>
                    <Col>
                        <p style={{ marginTop: 60 }}>The Big Money Ballin’ organization asks for your patience as the stadium continues to ramp up staffing levels and integrate new operational systems. While staff members are working hard to deliver a high-quality gameday experience, certain processes may take additional time as these systems settle into full operation. Your understanding and cooperation are greatly appreciated.</p>
                        <h3 style={{ marginTop: 60 }}>Tickets</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Fans arriving at Big Money Field this season will notice upgraded pedestal-style ticket scanners at every stadium gate. These scanners are designed to make entry faster and more convenient. Mobile tickets stored in a digital wallet may be scanned on the upper portion of the pedestal, while barcoded mobile tickets can be scanned on the lower portion. Each ticket must be scanned individually, so fans are encouraged to ensure their phones are charged, screens are bright, and tickets are easily accessible as they approach the gate.</p>
                        <h3 style={{ marginTop: 60 }}>Entry</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>To help ensure a smooth arrival, fans are encouraged to enter the stadium early and use the specific gate listed on their mobile ticket. As many attendees continue to adjust to mobile ticketing, entry lines may progress more slowly during peak times. When weather allows, fireworks will be launched one hour before kickoff to signal that it’s time to make your way toward your gate.</p>
                        <p>The Ballin’ Atrium will open to ticketed guests four hours prior to kickoff. Fans wishing to enter the Atrium before the general stadium seating areas open—two hours prior to kickoff—must do so through the Cash Flow Gate, where tickets will be scanned. All remaining gates across the stadium open two hours before kickoff. Once a ticket has been scanned for entry, guests may not exit and re-enter the stadium, and this policy also applies to afternoon games.</p>
                        <h3 style={{ marginTop: 60 }}>Concessions</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>All concession and merchandise areas throughout Big Money Field operate on a fully cashless system. Guests should plan to use credit or debit cards, or a contactless payment method such as Apple Pay or Google Pay. For fans who do not use cards, a cash-to-card conversion kiosk is available inside the Stadium Atrium, allowing guests to load cash onto a prepaid card that can be used anywhere inside the venue.</p>
                    </Col>
                    <Col xs="auto"></Col>
                </Row>
            </Row>
        </Container>
    );

}

