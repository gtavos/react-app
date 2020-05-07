import React from 'react'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { NavMenu } from '../../../shared/components/menu'
import './HeaderTemplate.css'

const HeaderTemplate = ({
  isNavbarOpen,
  handleNavbarToggle,
}) => (
  <header className="header">
    <Container>
      <Navbar dark expand="md">
        <NavbarBrand>
          <Link to="/">React App</Link>
        </NavbarBrand>

        <NavbarToggler onClick={handleNavbarToggle} />
        <Collapse isOpen={isNavbarOpen} navbar>
          <Nav className="ml-auto align-middle" navbar pills>
            <NavMenu />
            <NavItem className="mx-3 my-2 my-md-0" />
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  </header>
)

export default HeaderTemplate