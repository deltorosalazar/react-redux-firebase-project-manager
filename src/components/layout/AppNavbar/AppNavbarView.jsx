import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../SignedOutLinks'

const AppNavbarView = ({ isOpen, toggle }) => {
  return (
    <div>
      <Navbar color="light" light expand="md" className="mb-4">
        <NavbarBrand>Project Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <SignedInLinks />
            <SignedOutLinks />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default AppNavbarView
