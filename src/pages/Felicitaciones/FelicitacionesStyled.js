import styled from 'styled-components';

export const TextStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 120px;
  }
`;

export const TitleStyled = styled.h1`
  color: white;
`;

export const ContainerInfoStyled = styled.div`
  text-align: center;

  & p {
    margin-bottom: 50px;
  }
`;

export const PatternStyled = styled.img`
  width: 100%;
  position: fixed;
  z-index: -100000000;
  bottom: -80px;
`;
