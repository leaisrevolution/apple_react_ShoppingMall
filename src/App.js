import React from 'react';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Lea's Shopping Mall</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
            </Navbar>

            <div>
            </div>


        </>
    )
}



export default App;