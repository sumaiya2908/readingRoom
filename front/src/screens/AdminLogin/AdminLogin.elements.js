import styled  from 'styled-components';
import { primary } from '../../components/Header/Header.elemets';

export const LoginPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;
`;
export const LoginHeading = styled.div`
padding: 0 1rem 2rem;
font-size: 2rem;
margin-right: 4rem;
color: ${primary};
`;
export const LoginForm = styled.form`
display:flex;
flex-direction: column;
`;

export const LoginLabel = styled.label`
margin-bottom: 0.5rem;
font-size: 1.5rem;
`;

export const LoginInput = styled.input`
margin-bottom: 1.3rem;
padding: 0.6rem 1rem;
font-size: 1.2rem;
`;

export const LoginBtn = styled.button`
padding: 0.6rem 1rem;
color: #fff;
background-color: ${primary};
border: 0;
font-size: 1.5rem;
letter-spacing: 3px;
`;

