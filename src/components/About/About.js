import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <Container fluid className="p-0 m-0">
            <div className="about-img d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                    <h1>We share the best courses to the world to make a strong nation </h1>
                    <p className="w-75 m-auto">Changing learning for the better
                        Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                </div>
            </div>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?size=626&ext=jpg" alt="" className="img-fluid" />
                    </Col>
                    <Col className="d-flex align-items-center ">
                        <div>
                            <h1>Learn with Online, Where Dream Begin</h1>
                            <p>We’re a leading e-learning platform for learning and teaching online. Explore some of our most popular content and learn something new.</p>
                            <p>
                                We help people of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>




    );
};

export default About;