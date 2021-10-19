import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-center ">
            <h1 className="error">404</h1>
            <h1>Page is not found</h1>
            <Link to="/home">
            <Button>Back to Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;