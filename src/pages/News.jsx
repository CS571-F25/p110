import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";

import news from "../jsons/news.json";
import story from "./Story.jsx";
const imageModules = import.meta.glob('../images/*', { eager: true });

const imgMap = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => {
    const fileName = path.split("/").pop();
    return [fileName, mod.default];
  })
);


export default function News() {

    const navigate = useNavigate();

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Row className="justify-content-center">
                    <h1 className="text-center m-4">News</h1>
                    <hr style={{ width: "80px", borderTop: "3px solid #2c7a2c", marginBottom: 40 }} />
                </Row>
                {Object.keys(news).map((c, i) => {
                    return <Col key={i} xs={12} md={6} lg={4} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Img style={{ height: "280px", objectFit: "cover" }} src={imgMap[news[c].img]}></Card.Img>
                            <Card.Body>
                                <Card.Title style={{ marginBottom: 20 }}>{news[c].title}</Card.Title>
                                <Button
                                    variant="success"
                                    onClick={() => navigate("/Story", {
                                        state: {
                                            title: news[c].title,
                                            body: news[c].body,
                                            img: news[c].img,
                                            caption: news[c].caption
                                        }
                                    })}
                                >
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}

            </Row>
        </Container>
    );

} 
