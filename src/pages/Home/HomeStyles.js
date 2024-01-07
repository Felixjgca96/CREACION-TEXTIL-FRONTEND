// import styled from 'styled-components';

// export const HomeWrapper = styled.div`
//   max-width: 1600px;
//   padding: 2rem;
//   margin: 0 auto;
//   h2 {
//     font-weight: 400;
//   }
// `;

// export const CategoriasWrapper = styled.section`
// `;

// export const ProductosWrapper = styled.section`
// `;

// export const RecomendadosWrapper = styled.section`
//   margin-top: 1rem;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #18191a;
//   padding-bottom:10px;
//   border-radius: 20px;


//   h3 {
//     font-size: 4rem;
//     margin-top: 30px;
//     margin-bottom: 10px;
//     color: white;
//     text-align: center;

//     @media (max-width: 900px) {
//       font-size: 2.7rem;
//     }
//     @media (max-width: 470px) {
//       font-size: 1.6rem;
//     }
//   }
// `;

// export const ButtonContainerStyled = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   margin-top: 3rem;
// `;

import styled from "styled-components";

export const HomeWrapper = styled.div`
  /* width: 90vw;
  max-width: 1600px;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 70px; */
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0px;
  width: 90%;
  h2 {
    font-weight: 400;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    margin-top: 10px;
  }
`;

export const CategoriasWrapper = styled.section`
  margin-top: 8rem;
`;

export const ProductosWrapper = styled.section`
  padding-top: 5rem;
`;

export const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1rem;
`;
export const RecomendadosWrapper = styled.section`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #18191a;
  border-radius: 20px;

  h3 {
    font-size: 4rem;
    margin-top: 30px;
    margin-bottom: 10px;
    color: white;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 2.7rem;
    }
    @media (max-width: 470px) {
      font-size: 1.6rem;
    }
  }
`;
