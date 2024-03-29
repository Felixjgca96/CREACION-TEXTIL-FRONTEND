import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  width: 450px;
  height: 550px;

  padding: 15px;
  background-color: var(--gray-bg);
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 540px) {
    width: 350px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
  @media (max-width: 390px) {
    width: 250px;
  }
`;

export const CloseButtonContainerStyled = styled.div`
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: black;
  color: white;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid white;
  border-radius: 10px;
  padding: 3px;

  & h1 {
    margin: 0;
    @media (max-width: 450px) {
      font-size: 25px;
    }
    @media (max-width: 390px) {
      font-size: 20px;
    }
  }
`;

export const MainContainerStyled = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  gap: 5px;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 85%;
  overflow: scroll;
  padding-bottom: 5px;
  padding-top: 5px;
  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  background: var(--gray-bg);
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border-radius: 15px;
  @media (max-width: 540px) {
    width: 300px;
  }
  @media (max-width: 450px) {
    width: 250px;
    flex-direction: column;
    gap: 5px;
  }
  @media (max-width: 390px) {
    width: 200px;
  }
  & img {
    width: 80px;
    height: 80px;
    border-radius: 16px;
    object-fit: cover;
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;
  width: 190px;

  @media (max-width: 450px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
  color: white;
  border: 2px solid white;
  padding: 3px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

export const PriceContainerStyled = styled.div`
  background-color: var(--gray-bg);

& p {
  text-align: center;
  margin-bottom: 0;
}
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 15px;`;

export const QuantityContainerStyled = styled.div`
    display: flex;
  align-items: center;

  @media (max-width: 540px) {
    flex-direction: column;
    gap: 3px;
  }
  @media (max-width: 450px) {
    flex-direction: row;
  }
`;
