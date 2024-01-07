import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ResumenContainerStyled = styled.div`
  padding: 2rem 7rem;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1200px) {
    padding: 1rem 2rem;
}
`;

export const ResumenTitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
  }

  h1 {
    @media (max-width: 700px) {
    font-size: 25px;
    display: flex;
    align-items: center;
    text-align: center;
  }

  }

  
`;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background: var(--gray-bg);
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;

  & span {
    font-weight: 800;
    font-size: 1rem;
    background: white;
    

  }
`;

export const ProductsContainerStyled = styled.div`
  
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;

export const ResumenContainerInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  
`;

export const ResumenTextoInfo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-align: center;
    margin-top: 0px;

  }

`;
export const CostoProductoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoEnvioStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CostoTotalStyled = styled(CostoProductoStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 17px;
  span {
    border: 2px solid white;
    padding: 2px;
    border-radius: 5px;

  }
`;
