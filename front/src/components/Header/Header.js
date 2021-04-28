import React from "react";
import { HomeHeader, Logo, Nav, NavBtn, NavItem } from "./Header.elemets";

function Header() {
  return (
    <HomeHeader>
      <Logo>Reading Room</Logo>
      <Nav>
        <NavItem>Library Rules</NavItem>
        <NavItem>
          <NavBtn>Admin Login</NavBtn>
        </NavItem>
      </Nav>
    </HomeHeader>
    
  );
}

export default Header;
