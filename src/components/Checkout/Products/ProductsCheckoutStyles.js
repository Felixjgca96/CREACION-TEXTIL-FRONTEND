import styled from 'styled-components';

export const ProductosContainerStyled = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 450px) {
    width: 290px;
  }

  
`;

export const ProductsTitleStyled = styled.h2`
  font-weight: 500;
  font-size: 22px;
  @media (max-width: 450px) {
  font-size: 18px;
  }
`;

export const CardsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 80%;
  height: 440px;
  margin: 0 auto;

  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-bg);
    border-radius: 5px;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 270px;
  }

  @media (max-width: 1500px) {
  }
`;

export const PriceContainerStyled = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const PriceTotalStyled = styled.span`
  color: white;
  font-weight: 800;
  font-size: 1.0rem;
`;

export const HrStyled = styled.hr`
  margin: 0rem 0;
`;
