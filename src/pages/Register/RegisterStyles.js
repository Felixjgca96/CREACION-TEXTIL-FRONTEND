import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  background-color: red;
  @media (max-width: 500px) {
    width: 300px;
  } */

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

export const LoginEmailStyled = styled(Link)`
  & p {
    color: white;

    :hover {
      text-decoration: underline;
      transition: all 0.25s ease-out;
    }
  }
`;
