import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Navbar collapse0nSelect fixed='top' expand='sm' bg='dark' variant='dark'> 
            <Container>
            <Link className="navbar-brand" to='/invoicing'>Invoicing</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" exact to="/clients">Clients</Link>
                        <Link className="nav-link" exact to="/units">Units</Link>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav> 
                </Navbar.Collapse> 
            </Container>    
        </Navbar>
        
    )
};

export default Navigation;