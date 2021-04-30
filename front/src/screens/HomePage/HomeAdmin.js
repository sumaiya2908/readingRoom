import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "../../components/CopyRight";
import Header from "../../components/Header/Header";
import {
  ColorText,
  Hero,
  HeroBtn,
  HeroText,
  HomeContainer,
  NavBtn,
} from "./HomePage.elements";

function HomeAdmin() {
  return (
    <HomeContainer>
      <Header />
      <Hero admin>
        <HeroText>
          Welcome to{" "}
          <ColorText>
            <br/>Online Library <br /> Management
          </ColorText>{" "}
          System
        </HeroText>
        <HeroBtn admin>
          <Link to="/admin-login">
            <NavBtn home>Member List</NavBtn>
          </Link>
          <Link to="/admin-login">
            <NavBtn home>Book list</NavBtn>
          </Link>
          <Link to="/admin-login">
            <NavBtn home>Add a member</NavBtn>
          </Link>
          <Link to="/admin-login">
            <NavBtn home>Add a book</NavBtn>
          </Link>
        </HeroBtn>
      </Hero>
      <CopyRight />
    </HomeContainer>
  );
}

export default HomeAdmin;
