import React from "react"
import { useDebugState } from "use-named-state";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink, withRouter } from "react-router-dom"

function Header() {
  const [isOpen, setOpen] = useDebugState("isOpen",false) 
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="#">World Time Clock</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="" activeClassName="active" tag={RRNavLink}>Real Time zones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ideal" activeClassName="active" tag={RRNavLink}>Ideal Time zones</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default withRouter(Header)