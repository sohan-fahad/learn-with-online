import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroBox.css'

const HeroBox = () => {
    return (
        <Container fluid className="hero-bg">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <div className="text-center hero-content">
                        <h1>Welcome to Learn with Online Platform</h1>
                        <p>Here You can learn & find a lot of courses by a single subscrption.</p>
                        <Link to="/courses">
                            <Button variant="primary">Browse Courses</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HeroBox;