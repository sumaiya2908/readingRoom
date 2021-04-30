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
flex-direction: ${({admin}) => (admin? null: 'column')};
align-items:${({admin}) => (admin? 'space-between': 'center')};
justify-content: ${({admin}) => (admin? 'space-evenly': 'center')};
margin-bottom: 5rem;

`;

export const HeroText = styled.div`
font-size: 3rem;
text-align: center;
line-height: 4rem;
`;

export const HeroBtn = styled.div`
    display: flex;
    flex-direction: ${({admin}) => (admin? 'column': null)};
    justify-content: ${({admin}) => (admin?  null : 'space-between')};
    margin-top: ${({admin}) => (admin? null: '2.3rem')};
`;
 export const ColorText= styled.span`
 color : ${({color}) => (color?color:primary)};

 `;

 export const CopyRigh = styled.div`
  align-self: center;
  padding-bottom: 2rem;
  font-size: 1.1rem;
 `

export const NavBtn = styled.button`
background-color: ${primary};
color: #fff;
padding: 0.4rem 1rem;
border: 0;
font-size: 1.3rem;
margin-bottom: 1rem;
cursor: pointer;
`;