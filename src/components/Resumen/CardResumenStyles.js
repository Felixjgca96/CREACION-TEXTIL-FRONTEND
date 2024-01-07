import styled from 'styled-components';

export const ProductStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--gray-bg);
  border-radius: 15px;
  padding: 1.0rem 0.5rem;
  width: 90%;
  max-width: 620px;
  @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    
`;

export const ProductLeftStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0px;

    }
`;

export const PriceContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 800px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

    }

`;

export const ProductPriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.5rem;
  @media (max-width: 600px) {
      font-size: 1.2rem;

    }
`;
