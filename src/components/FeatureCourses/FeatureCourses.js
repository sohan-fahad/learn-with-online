import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const FeatureCourses = () => {
    const [featureCourses, setFeatureCourses] = useState([])
   useEffect(()=>{
       fetch('/Data.JSON')
       .then(res=> res.json())
       .then(data=> setFeatureCourses(data))
   },[])
   const showFour = featureCourses.slice(0, 4)
    return (
        <Container>
        <Row xs={1} md={4} className="g-4 mt-5 pt-5">
            {
                showFour.map(course =>
                    <Course
                        key = {course.courseId}
                        course={course}
                    ></Course>

                )
            }
        </Row>
    </Container>
    );
};

export default FeatureCourses;