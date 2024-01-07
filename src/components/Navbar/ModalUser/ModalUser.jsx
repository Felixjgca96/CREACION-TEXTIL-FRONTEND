import { AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";


import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../../redux/user/userSlice";
import {CloseButtonContainerStyled,
  CloseButtonStyled, } from "../ModalCart/ModalCartStyles";

const ModalUser = () => {
  const navigate = useNavigate();

  const {hiddenMenu, currentUser} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 3000 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
              <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => dispatch(toggleHiddenMenu())}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>
          <UsernameStyled>{currentUser.nombre}</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
          <span onClick={() => {
            dispatch(setCurrentUser(null))
            dispatch(toggleHiddenMenu())
            navigate("/")
            window.location.href = window.location.href

          }}>Cerrar Sesion</span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
