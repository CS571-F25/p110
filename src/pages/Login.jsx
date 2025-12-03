import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Container, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";

export default function Login(props) {

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";

    return <>
        <Row className='justify-content-center'>
            <h1>Login</h1>
            <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 40, marginTop: 10 }} />
        </Row>

        <Row className='justify-content-center'>
            <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginBottom: 30 }}
            />
        </Row>
        {
            username ?
                <Button
                    variant="success"
                    onClick={() => {
                        localStorage.setItem("username", username);
                        props.setIsLoggedIn(1);
                        navigate(from);
                    }}
                    style={{ marginBottom: 200 }}
                >Login</Button>
                :
                <Button variant="success" disabled style={{ marginBottom: 200 }}>Login</Button>
        }
    </>
}

