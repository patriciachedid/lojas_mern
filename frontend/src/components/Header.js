import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
// import  { LinkContainer } from 'react-router-boostrap'

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                {/* <LinkContainer to='/'> */}
                <Navbar.Brand href="/">Lojas Mern</Navbar.Brand>
                {/* </LinkContainer> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/cart">
                        <i className='fas fa-shopping-cart mx-1'></i>Meu carrinho</Nav.Link>
                    <Nav.Link href="#login">
                    <i className='fas fa-user mx-1'></i>Login</Nav.Link>      
                    </Nav>    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
