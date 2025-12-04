import { Col, Row, Card } from "react-bootstrap";

import events from "../jsons/events.json";

export default function Events() {

    return <>
        <Row className="justify-content-center" style={{ marginBottom: 40 }}>
            <h1 style={{ marginTop: 40 }}>Events</h1>
            <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
        </Row>

        {Object.keys(events).map((c, i) => {
            return <Card key={i} className="shadow-sm" style={{ marginBottom: 40 }}>
                <Row className='mt-3 justify-content-center'>
                    <Col style={{ marginLeft: 40, textAlign: 'left' }}>
                        <h2 className='mb-3'>{events[c].title}</h2>
                        <p>{events[c].date}</p>
                        <p>{events[c].location}</p>
                    </Col>
                    <Col>
                        <p style={{
                            lineHeight: "1.5",
                            maxWidth: "600px",
                            margin: "auto",
                            textAlign: "left"
                        }}
                        >{events[c].summary}</p>
                    </Col>
                </Row>
            </Card>
        })}


    </>
}


