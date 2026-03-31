import { useDebugState } from 'use-named-state';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink, useNavigate } from 'react-router-dom';
import { getLocale } from '@utils/getLocale';

function Header() {
  const [isOpen, setOpen] = useDebugState<boolean>('isOpen', false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <Navbar color="dark" dark expand="lg">
      <NavbarBrand href="#">{getLocale('WorldTimeClock')}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="" onClick={() => navigate('')} activeClassName="active" tag={RRNavLink}>
              {getLocale('RealTimeZones')}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/ideal" onClick={() => navigate('/ideal')} activeClassName="active" tag={RRNavLink}>
              {getLocale('IdealTimeZones')}
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
