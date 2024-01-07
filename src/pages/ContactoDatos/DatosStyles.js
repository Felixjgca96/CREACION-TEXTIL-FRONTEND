


import styled from "styled-components";
import { Formik as FormikContainer, Form as FormikForm } from "formik";
export const ContainerDatosStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 5rem;
`;
export const ContactoDatosStyled = styled.div`
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0px;
  width: 700px;
  h2 {
    @media (max-width: 375px) {
      font-size: 18px;
      text-align: center;

    }
  }
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 95%;
`;
