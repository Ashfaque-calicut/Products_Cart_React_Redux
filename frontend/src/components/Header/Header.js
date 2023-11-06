import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import {  getCartProducts } from '../Reducer/CardSlice';




function Header() {
  const data=useSelector((state)=>state.cart.viewCart);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCartProducts())
  }, [dispatch]);

  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        {/* <Navbar.Brand as={Link} to={'/'} className='text-white'>Shopping</Navbar.Brand> */}
        <Navbar.Brand href='/' className='text-white'>Products</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto e">
            {/* <Nav.Link as={Link} to={'/cart'} className='text-white' >Cart {data.length}</Nav.Link> */}
            <Nav.Link href='/cart' className='text-white' >Cart {data.length}</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;