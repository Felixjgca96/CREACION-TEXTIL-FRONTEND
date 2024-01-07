import React from "react";
import "./Navbar.css"
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";

import CartIcon from "./CartIcon/CartIcon";
import ModalCart from "./ModalCart/ModalCart";
import ModalUser from "./ModalUser/ModalUser";



import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  SpanStyled,
  UserContainerStyled,
  UserNavStyled,
  Logo,
  LinkNav,
  MenuContainerStyled,
  MenuNavStyled,
} from "./NavbarStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/user/userSlice";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const {currentUser, hiddenMenu} = useSelector((state) => state.user);

  return (
    <NavbarContainerStyled>
      <ModalCart />
      <ModalUser />
      <Logo>
        <Link to="/">
          <img src="./logo4.png" alt="logo" />
        </Link>
      </Logo>
      <LinksContainerStyled className={`nav_items ${isOpen && "open"}`}>
          <Link to="/">
            <LinkNav> Home</LinkNav>
          </Link>
          <Link to="/sobrenosotros">
            <LinkNav> Somos</LinkNav>
          </Link>
          <Link to="/productosroutes">
            <LinkNav> Productos</LinkNav>
          </Link>

          <Link to="/datos">
            <LinkNav> Contacto</LinkNav>
          </Link>


        <CartNavStyled>
          <CartIcon />
        </CartNavStyled>

        <UserNavStyled>
          <UserContainerStyled onClick={() => {
            currentUser ?
            dispatch(toggleHiddenMenu()) :
            navigate("/login")}
          }
          >
            <SpanStyled>
              {
                currentUser ?
                `${currentUser.nombre}` :
                "Iniciar Sesión"
              }
            </SpanStyled>
            <img src="./usuario.png" alt="icono" />
          </UserContainerStyled>
        </UserNavStyled>

      </LinksContainerStyled>
      <div className="barranav" >
        <div className="nav_toggle" onClick={() => setIsOpen(!isOpen)}  >
          <img src="menu.png" alt="" />
        </div>
      </div>
      {/* <div className="barranav" >
        <div className="nav_logo"  >codea.app</div>
        <div className={`nav_items ${isOpen && "open"}`}  >
          <a href="#">Inicio</a>
          <a href="#">Bio</a>
          <a href="#">sdfsdf</a>
          <a href="#">sfsdfsdf</a>
        </div>
        <div className="nav_toggle" onClick={() => setIsOpen(!isOpen)}  >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}

    </NavbarContainerStyled>
    
  );
}

export default Navbar;
