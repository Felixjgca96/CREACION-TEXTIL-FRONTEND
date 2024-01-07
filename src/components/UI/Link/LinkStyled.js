import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerLinkStyled = styled(motion.div)``;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: black;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  z-index: 2;
  border: solid 2px white;

  & span {
    font-weight: 700;
    font-size: 1rem;
    background: black;
    color: white;
  }
`;
