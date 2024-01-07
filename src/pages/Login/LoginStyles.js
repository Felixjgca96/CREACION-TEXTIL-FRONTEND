import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
    margin: 30px auto;

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0px;
gap: 15px;
width: 300px;
`;

export const Form = styled(FormikForm)`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  gap: 20px;
  width: 250px;

`;

export const LoginEmailStyled = styled.p`
    color: white;


  :hover {
    text-decoration: underline;
    transition: all 0.25s ease-out;
  }
`;
