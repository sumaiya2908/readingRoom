import React from 'react'
import CopyRight from '../../components/CopyRight'
import Header from '../../components/Header/Header'
import { NavBtn } from '../../components/Header/Header.elemets'
import { ColorText, Hero, HeroBtn, HeroText, HomeContainer } from './HomePage.elements'

function HomePage() {
    return (
        <HomeContainer>
            <Header/>
            <Hero>
                <HeroText>
                    Welcome to <ColorText>Online Library <br/> Management</ColorText> System
                </HeroText>
                <HeroBtn>
                    <NavBtn home>
                        Admin Login
                    </NavBtn>
                    <NavBtn home>
                        User Login
                    </NavBtn>
                    <NavBtn home>
                        User Register
                    </NavBtn>
                </HeroBtn>
            </Hero>
            <CopyRight/>
        </HomeContainer>
    )
}

export default HomePage
