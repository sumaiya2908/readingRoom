import styled from 'styled-components';
import {primary} from '../../components/Header/Header.elemets';
export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
justify-content: space-between;
`;

export const Hero = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 5rem;

`;

export const HeroText = styled.div`
font-size: 3rem;
text-align: center;
line-height: 4rem;
`;

export const HeroBtn = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.3rem;
`;
 export const ColorText= styled.span`
 color : ${({color}) => (color?color:primary)};

 `;

 export const CopyRigh = styled.div`
  align-self: center;
  padding-bottom: 2rem;
  font-size: 1.1rem;
 `