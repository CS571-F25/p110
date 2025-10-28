import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";


export default function BadgerLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        sessionStorage.setItem("loginStatus", JSON.stringify(loginStatus));
    }, [loginStatus]);

    return <>
        <h1>Login</h1>
        <Form>
            <Form.Label htmlFor="Username" className="my-2">Username</Form.Label>
            <Form.Control
                id='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Label htmlFor="Password" className="my-2">PIN</Form.Label>
            <Form.Control
                id='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
        </Form>
        <Button className="my-4"
            onClick={async () => {
                if (username === "" || password === "") {
                    alert("You must provide both a username and a pin!");
                    return;
                }
                else if (!/^\d{7}$/.test(password)) {
                    alert("Your pin is a 7-digit number!");
                    return;
                }

                const res = await fetch("https://cs571api.cs.wisc.edu/rest/f25/hw6/login", {
                    headers: {
                        "X-CS571-ID": CS571.getBadgerId(),
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify({ username: username, pin: password }),
                });

                if (!res.ok) {
                    alert("Incorrect username or pin!");
                    return;
                }

                if (res.status === 200) {
                    alert("Login successful!");
                    setLoginStatus({ username, loggedIn: true });
                    navigate("/");
                    return;
                }

            }}>Login</Button>
    </>
}
 
