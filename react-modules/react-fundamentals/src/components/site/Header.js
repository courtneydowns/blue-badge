import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <Nav className="ml-auto" navbar>
          <NavbarBrand href="/">React Library</NavbarBrand>
          <NavItem>
            <NavLink href="https://github.com/courtneydowns">Github</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;
