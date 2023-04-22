import React from 'react'
import FabCabLogo from '../fabcab.png'
import { Button } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';


export const NavBar = () => {
	return (
		<div>
			<Navbar bg="dark" variant='dark' expand="lg">
      <Container className='justify-content-around'>

        	<Navbar.Brand >
          <Nav.Link className='d-flex align-items-center' as={Link} to='/'>
           <img style={{borderRadius: 10}} src={FabCabLogo} alt='FabCab' width='40' height='40'/>
					  <h3 className='mx-2 my-auto'>FabCab</h3>
          </Nav.Link>
					
					</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav>
          <Nav.Link style={{textDecoration: 'none', color: '#fff'}} as={Link} to='/'>Home</Nav.Link>
          <NavDropdown title={<span style={{textDecoration: 'none', color: '#fff'}}>Services</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Airport Transfers</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Corporate Travel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Sightseeing Tours</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">24/7 Availability</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Wedding Transport</NavDropdown.Item>
</NavDropdown>
            <Nav.Link style={{textDecoration: 'none', color: '#fff'}} as={Link} to='/about'>About</Nav.Link>
            <Nav.Link style={{textDecoration: 'none', color: '#fff'}} as={Link} to='/contact-us'>Contact Us</Nav.Link>

            <Button className='mx-4' variant="warning"><Link className='text-black fw-bold' to='/reservation' style={{textDecoration: 'none'}}>Reserve a Cab</Link></Button>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
		</div>
	)
}
