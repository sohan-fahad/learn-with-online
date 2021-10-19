import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <Container fluid className="mt-5 py-5 bg-primary text-white">
            <Container>
                <Row>
                    <Col>
                        <Link className="footer-link" to="/home">Home</Link>
                        <Link className="footer-link" to="/about">About</Link>
                        <Link className="footer-link" to="/courses">Courses</Link> 
                        <Link className="footer-link" to="/blogs">Blogs</Link> 
                    </Col>
                    <Col className="text-end"> <small>&copy; Copyright 2021, Learn with Online</small></Col>
                </Row>
            </Container>
        </Container>

        );
    }
}

export default Footer;