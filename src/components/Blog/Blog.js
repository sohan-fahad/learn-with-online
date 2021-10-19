import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Blog = (props) => {
    const {img, title, description} = props.blog
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p><b>Instructor: </b>{description}</p>
                    </Card.Text>
 
                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-3">
                    <Button variant="primary">Read more</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Blog;