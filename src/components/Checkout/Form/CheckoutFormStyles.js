import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 450px) {
    width: 290px;
  }
  
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap:5px ;  
  
`;
