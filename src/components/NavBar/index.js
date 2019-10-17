import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import './style.scss';

const styleLink = {
  color: 'white'
};

function NavBar() {
  return (
    <Navbar expand='lg' fixed='top'>
      <Navbar.Brand>
        <NavLink to='/'>
          <Logo width='150px' height='30px' />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <ul className='navbar-nav ml-auto'>
          <NavLink
            style={styleLink}
            className='nav-link'
            activeClassName='activeRoute'
            to='/products'
          >
            Products
          </NavLink>
          <NavLink
            style={styleLink}
            className='nav-link'
            activeClassName='activeRoute'
            to='/about'
          >
            Us
          </NavLink>
          <NavLink
            style={styleLink}
            className='nav-link'
            activeClassName='activeRoute'
            to='/blog'
          >
            Blog
          </NavLink>
          <NavLink
            style={styleLink}
            className='nav-link'
            activeClassName='activeRoute'
            to='/carrier'
          >
            Carrier
          </NavLink>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
