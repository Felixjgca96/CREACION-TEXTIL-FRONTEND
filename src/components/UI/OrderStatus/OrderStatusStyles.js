import styled from 'styled-components';

export const StatusStyled = styled.span`
display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 1rem;
  top: 1rem;
  right: 1rem;
  border-radius: 1rem;
  padding: 0.3rem;


`;

export const CheckStyled = styled(StatusStyled)`
  background: black;
`;

export const PendingStyled = styled(StatusStyled)`
  background: black;
`;

export const CancelStyled = styled(StatusStyled)`
  background: black;
`;
