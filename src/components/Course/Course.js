import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {title, img, price, course_timing, students_enrolled} = props.course
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img}  className="p-3"/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p><b>Instructor: </b>{course_timing}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><b>Total Students: </b>{students_enrolled}</p>
                    </Card.Text>
                    <Card.Text>
                        <h5>Price: <span>$</span>{price}</h5>
                    </Card.Text>
 
                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-3">
                    <Button variant="primary">Enroll Now</Button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Course;