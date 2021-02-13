import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const MenuBars = styled.div`
  margin-left: 0rem;
  font-size: 2rem;
  background: none;
`;
export const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 14px;
  width: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding-left: 0;
  box-sizing: border-box;
`;
export const ToggleLine = styled.div`
  width: 100%;
  height: 2px;
  background: white;
`;
export const Bars = styled(ToggleButton)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;