import React from 'react'
import {Badge, Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png'

const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} alt="ProShop" width="30" height="30" className="d-inline-block align-top"/>
                    ProShop
                </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                        <Nav.Link>
                            <FaShoppingCart /> Cart
                            {
                                cartItems.length > 0 && (
                                    <Badge pill bg='success' style={{marginLeft: '5px'}}>
                                        {cartItems.reduce((acc,cItem) => acc+cItem.qty , 0)}
                                    </Badge>
                            )}
                        </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                        <Nav.Link><FaUser /> Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header