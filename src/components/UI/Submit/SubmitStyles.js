import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: black;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin-top: 15px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
