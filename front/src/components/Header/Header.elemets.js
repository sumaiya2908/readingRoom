import styled from "styled-components";
export const primary = "#07689F";
export const HomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Logo = styled.h1`
  font-family: "Cinzel Decorative", cursive;
  font-size: 1.5rem;
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 0 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;
export const NavBtn = styled.button`
  background-color: ${primary};
  color: #fff;
  padding: 0.4rem 1rem;
  border: 0;
  font-size: 1.3rem;
  margin-right: ${({home}) => (home?'1rem':'null')}
`;
