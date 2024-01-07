import styled from 'styled-components';

export const MisOrdenesContainerStyled = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem 0;
  

`;

export const MisOrdenesTitleStyled = styled.h2`
  font-weight: 800;
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 2rem;
  }


`;

export const MisOrdenesPatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
`;

export const MisOrdenesBtnContainerStyled = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
