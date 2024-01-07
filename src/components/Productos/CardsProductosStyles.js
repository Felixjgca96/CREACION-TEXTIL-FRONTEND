import styled from 'styled-components';

export const ProductosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ProductosCard = styled.div`
  background: var(--gray-bg);
  width: 280px;
  border-radius: 15px;
  padding: 1rem;
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: #666;
    font-size: 1.2rem;
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const CardPrice = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: white;
`;
