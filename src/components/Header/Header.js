import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="primary">
            <Container>
                <Navbar.Brand>
                    <NavLink exact to="/" ClassName="fw-bold">
                        <img src={logo} className="logo" alt="" srcset="" />
                    </NavLink>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink to="/home" className="nav-menu-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-menu-link">
                        About
                    </NavLink>
                    <NavLink to="/courses" className="nav-menu-link">
                        Courses
                    </NavLink>
                    <NavLink to="/blogs" className="nav-menu-link">
                        Blogs
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;