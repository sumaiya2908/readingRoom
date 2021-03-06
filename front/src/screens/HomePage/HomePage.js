import React from "react";
import { Link } from "react-router-dom";
import CopyRight from "../../components/CopyRight";
import Header from "../../components/Header/Header";
import { NavBtn } from "../../components/Header/Header.elemets";
import {
  ColorText,
  Hero,
  HeroBtn,
  HeroText,
  HomeContainer,
} from "./HomePage.elements";

function HomePage() {
  return (
    <HomeContainer>
      <Header />
      <Hero>
        <HeroText>
          Welcome to{" "}
          <ColorText>
            Online Library <br /> Management
          </ColorText>{" "}
          System
        </HeroText>
        <HeroBtn>
          <Link to="/admin-login">
            <NavBtn home>Admin Login</NavBtn>
          </Link>
        </HeroBtn>
      </Hero>
      <CopyRight />
    </HomeContainer>
  );
}

export default HomePage;
