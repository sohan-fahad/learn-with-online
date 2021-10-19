import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('./Blog.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <Container>
            <Row xs={1} md={3} className="g-4 mt-5 pt-5">
                {
                    blogs.map(blog =>

                        <Blog
                            key={blog.id}
                            blog={blog}
                        ></Blog>
                    )
                }
            </Row>
        </Container>
    );
};

export default Blogs;