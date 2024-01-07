import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavbarContainerStyled = styled.div`
  height: 60px;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  gap: 20px;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  


`;

export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${props => (props.home ? '#ff9d01' : '#ff9300')};
  top: 100px;
    img {
      width: 50px;
      border-radius: 15px;
      padding: 3px;
        
      @media (max-width: 400px) {
        width: 45px;
      }
    }
    img:hover {
        border-bottom: 1px solid #ffffff;
        border-radius: 5px;
        }
  
`;

export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  gap: 7px;
  img:hover {
        border-bottom: 1px solid #ffffff;
        border-radius: 5px;
        }
`;

export const CartNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;


  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: black;
    font-size: 0.9rem;
    
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
  }
`;

export const UserImageStyled = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
  
  
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.div`
  img {
    width: 65px;
    padding-bottom: 5px;
    padding-right: 2px;
    padding-left: 2px;

    @media (max-width: 400px) {
      width: 55px;
    }
  }
  img:hover {
    border-bottom: 1px solid #ffffff;
    border-radius: 5px;
  }
`;

export const LinkNav = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  text-decoration: none;
  list-style: none;
  color: white;

  &:hover {
    border-bottom: 1px solid #ffffff;
    padding-bottom: 5px;

  }
  @media (max-width: 980px) {
    font-size: 15px;
  }


  
`;

export const MenuContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
  gap: 7px;
  img:hover {
        border-bottom: 1px solid #ffffff;
        border-radius: 5px;
        }
`;

export const MenuNavStyled = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;


  span {
    position: absolute;
    top: 0;

    height: 20px;
    width: 20px;
    text-align: center;

    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: black;
    font-size: 0.9rem;
    
  }
`;

