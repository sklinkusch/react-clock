import React from "react"
import { useDebugState } from "use-named-state";
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink, withRouter } from "react-router-dom"
import { getPermLocale } from "./getLocale"

function Header() {
  const [isOpen, setOpen] = useDebugState("isOpen",false) 
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="#">{getPermLocale("WorldTimeClock")}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="" exact={true} activeClassName="active" tag={RRNavLink}>{getPermLocale("RealTimeZones")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/ideal" activeClassName="active" tag={RRNavLink}>{getPermLocale("IdealTimeZones")}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default withRouter(Header)