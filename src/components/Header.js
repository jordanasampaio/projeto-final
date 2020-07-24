import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './Header.css';

function Header(props) {
  const { backgroundColor } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Header" style={{ backgroundColor }}>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img className="Logo" src="/images/logo.jpg" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="right" isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#videos">Vídeos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#parceiros">Parceiros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#participe">Participe</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
