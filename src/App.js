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

            <div className="jumbotron">
                <div className="content">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p className="subLead">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src="./shoes1.jpeg" alt="" />
                    </div>
                    <div className="col-md-4">2</div>
                    <div className="col-md-4">3</div>
                </div>
            </div>




        </>
    )
}



export default App;