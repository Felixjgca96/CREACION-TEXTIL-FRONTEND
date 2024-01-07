import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--gray-bg);
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  width: 150px;
  top: 75px;
  left: 0;
  z-index: 98;
  border-radius: 0rem 1rem 1rem 0rem;
  padding: 10px;
  margin: 0px;

  text-align: center;

  & span {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;


    &:hover {
    opacity: 80%;



    }
  }
`;

export const LinkStyled = styled(Link)`

  &:hover {
    opacity: 80%;

  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
  margin: 2px;


`;

export const HrStyled = styled.hr`
  margin: 0.5rem 0;
`;
