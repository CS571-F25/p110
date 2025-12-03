import { Container, Row, Col } from "react-bootstrap";

import Parking from '../../images/parking.jpg';

export default function CarryInPolicy() {

    return (
        <Container className="mt-4" style={{ backgroundColor: "white", paddingBottom: 50 }}>
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 style={{ marginTop: 40 }}>Parking</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 60, marginTop: 10 }} />
                </Row>
                <Row className='justify-content-center'>
                    <img alt={"parking lot photo"} src={Parking}></img>
                    <p>Parking Lot Map</p>
                </Row>
                <Row style={{ textAlign: "left" }}>
                    <Col xs='auto'></Col>
                    <Col>
                        <h3 style={{ marginTop: 60 }}>Passes and Reservations</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Parking around Big Money Field is structured to ensure an organized and efficient arrival experience for all fans. All parking spaces within the stadium-operated lots are reserved exclusively for holders of season parking passes. These passes are issued on a one-year basis and may be adjusted or withdrawn at the discretion of the Big Money Ballin’ organization. Purchasing a season parking pass for one year does not guarantee renewal in future seasons, and parking locations may vary from year to year. Fans interested in acquiring a season parking pass should contact the Big Money Field Ticket Office directly for availability and details.</p>
                        <p>For those interested in reserving a space for a single game, approved third-party operators offer a variety of nearby parking options available for advance purchase. Select lots close to the stadium also provide a limited number of individual game parking passes, sold digitally and scanned via mobile device on gameday. Tailgating may be restricted or prohibited in certain individually sold lots, depending on location and operator.</p>
                        <h3 style={{ marginTop: 60 }}>Parking Without a Reservation</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Fans arriving without a reservation will find numerous gameday cashless parking options offered by private property owners in the surrounding area. Prices vary based on proximity and demand. Additionally, many residential streets within walking distance of the stadium offer free parking on a first-come, first-served basis, though fans should be mindful of posted signs and neighborhood access restrictions.</p>
                        <p>Accessible parking for guests with disabilities is available in designated stadium-operated lots on a cashless, first-come, first-served basis. These spaces are located near the stadium entrances to ensure ease of access. Holders of season parking passes who require accessible parking will be directed to accessible stalls within the lot corresponding to their assigned parking pass, subject to availability.</p>
                        <p>Oversized vehicles, including RVs and buses, must fit within the allotted stall size in stadium-operated lots. Because these stalls are designed for standard vehicles, oversized vehicles should utilize approved nearby lots that provide appropriate accommodations. Fans seeking information on oversized vehicle parking should contact the designated local parking operator servicing large vehicles in the area.</p>
                        <h3 style={{ marginTop: 60 }}>Tailgating</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Tailgating is a long-standing tradition at Big Money Field, and fans are welcome to enjoy pregame festivities in stadium-operated lots. Tailgating setups must fit within the 9-foot-by-6-foot space directly behind each parked vehicle to maintain safe traffic flow for both vehicles and pedestrians. While charcoal and propane grills are permitted, recreational wood-burning fires, open flames, and devices such as turkey fryers are strictly prohibited. All grills must be supervised by a responsible adult, and coals must be fully extinguished before being left unattended. Designated containers for hot coals, recycling, and trash are available throughout the lots. All tailgating activities must be wrapped up and cleared prior to entering the stadium, and tailgating ends at kickoff in all stadium-controlled lots. The Big Money Ballin’ Fan Code of Conduct applies at all times throughout the parking lots.</p>
                        <h3 style={{ marginTop: 60 }}>Passenger Drop-Off Zone</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Due to significant traffic flow on gameday, passenger drop-offs are recommended at the designated zone near Ballin’ Way and Cash Drive, where sidewalks and event personnel are available to assist with safe crossing into the stadium lot. Fans should comply with posted time limits and follow instructions from traffic control officers directing vehicles into and out of the area. Because this zone becomes highly congested immediately after the game, it is not designated for post-game pickup. Drivers should arrange to meet passengers at an alternate location for departure following the event.</p>
                        <h3 style={{ marginTop: 60 }}>Public Transportation</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Fans are encouraged to make use of local public transportation services on gameday. Big Money Metro provides multiple free, high-efficiency bus routes serving the stadium beginning five hours before kickoff and continuing for roughly three hours after the game. Buses depart every 30 minutes, offering a convenient and reliable alternative to driving. Additional route and schedule information is available on the city’s official website.</p>
                        <p>For fans traveling from outside the immediate area, regional coach services also provide gameday transportation from destinations across the greater metro region and beyond, including select cities in Wisconsin and neighboring states. These services typically operate on a fee basis and offer both pregame arrival and postgame return options.</p>
                        <h3 style={{ marginTop: 60 }}>Rideshare</h3>
                        <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 20, marginTop: 10 }} />
                        <p>Guests utilizing rideshare services will find the most efficient pickup and drop-off experience by exiting the stadium through the Cash Flow or Brokerage Gates following the game. All rideshare pickups are directed to the corner of Big Money Drive and Golden Way, where drivers can safely meet passengers without obstructing stadium traffic. Fans should follow the posted signage and staff guidance to reach the designated rideshare area.</p>
                    </Col>
                    <Col xs='auto'></Col>
                </Row>
            </Row>
        </Container>
    );

}

