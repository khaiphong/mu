import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const Nav = styled.div`
  background: rgb(17, 26, 71);
  height: 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 36px;
  display: flex;
  color: rgb(180, 126, 9);
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;

  p {
    color: rgb(180, 126, 9);
    font-weight: bold;
    margin-right: 1rem;
  }
`;

const MenuBars = styled.div`
  margin-left: 0rem;
  font-size: 2rem;
  background: none;
`;
const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 16px;
  width: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-left: 0;
  box-sizing: border-box;
`;
const ToggleLine = styled.div`
  width: 100%;
  height: 2px;
  background: white;
`;

const Spacer = styled.div`
  flex: 1;
`;

export const OmLink = styled(Link)`
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 1rem;
  cursor: pointer;

  @media screen and (max-width: 300px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

const SidebarNav = styled.nav`
  background: rgb(17, 26, 71);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <Nav>
          <NavIcon to='#' onClick={showSidebar} >
            <p>Mu</p>
            <MenuBars>
              <ToggleButton >
                <ToggleLine />
                <ToggleLine />
                <ToggleLine />
              </ToggleButton>
            </MenuBars>
          </NavIcon>
          <Spacer />
          <OmLink to='#'>Alert from KP-Platform maximum 50 characters</OmLink>
        </Nav>
        <SidebarNav sidebar={sidebar} onClick={showSidebar}>
          <SidebarWrap>
            <NavIcon to='#' >
              X
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>

    </>
  );
};

export default Sidebar;
