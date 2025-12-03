import { Container, Row } from "react-bootstrap";

import deflated from '../images/deflated.jpg';

export default function NoMatch() {

    return <Container className="mt-4">
        <Row className="justify-content-center">
            <Row className="justify-content-center">
                <h1 className="text-center m-4">Page Not Found</h1>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 40 }} />
            </Row>
            <img style={{ width: '500px' }} alt="deflated football" src={deflated}></img>
            <Row>
                <p style={{ paddingLeft: 100, paddingRight: 100, paddingTop: 30, paddingBottom: 50 }}>Use the navigation bar to return to a different page</p>
            </Row>
        </Row>
    </Container>

}


