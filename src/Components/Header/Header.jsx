import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
        <Navbar expand="lg" variant="light" bg="light">
        <Container style={{minHeight: '100px'}} className=" justify-content-center align-items-center">
            <Navbar.Brand href="#"> <span>Asus at Dell Master Tech</span> </Navbar.Brand>
                   
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;