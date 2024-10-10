import React from 'react'
import Image from '../assets/logo.png'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-light">
                <Container>
                    <Navbar.Brand>
                        <div className='d-flex align-items-center flex-column'>
                            <img alt="" src={Image} width={'50px'} height={'50px'} className="d-inline-block align-top" />
                            <h4 className='fw-bold'>Plant Sphere</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='fw-bold fs-5'>Home</Nav.Link>
                            <Nav.Link href="#link" className='fw-bold fs-5'>About</Nav.Link>
                            <Nav.Link href="#link" className='fw-bold fs-5'>Services</Nav.Link>
                            <Nav.Link href="#link" className='fw-bold fs-5'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header