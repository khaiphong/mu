import React from 'react';
import { 
  Nav, 
  NavLink, 
  NavIcon, 
  Bars, 
  MenuBars,
  ToggleButton,
  ToggleLine 
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <MenuBars>
            <ToggleButton >
              <ToggleLine />
              <ToggleLine />
              <ToggleLine />
            </ToggleButton>
          </MenuBars>
        </NavIcon>

      </Nav>
    </>
  )
}

export default Navbar;
