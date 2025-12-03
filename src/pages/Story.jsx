import { Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const imageModules = import.meta.glob('../images/*', { eager: true });

const imgMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split("/").pop();
    return [fileName, mod.default];
  })
);

export default function Story() {

    const location = useLocation();
    const state = location.state || {};
    const title = state.title || "No Article Found";
    const body = state.body || "";
    const img = state.img || "";
    const caption = state.caption || "";

    return (
        <Container className="mt-4" style={{ backgroundColor: "white" }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 className="text-center m-4">{title}</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20 }} />
                </Row>
                <img src={imgMap[img]} alt={`${title} photo`} style={{ height: 500, width: 800, margin: 30, marginBottom: 20 }}></img>
                <em>{caption}</em>
                <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                <Row style={{ textAlign: "left" }}>
                    <p style={{ whiteSpace: "pre-line", paddingLeft: 100, paddingRight: 100, paddingTop: 30, paddingBottom: 50 }}>{body}</p>
                </Row>

            </Row>
        </Container>
    );

} 
