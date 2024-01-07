import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled2 = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 18px;
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-direction: column;



`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

`;
