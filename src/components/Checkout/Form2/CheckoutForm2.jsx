import Input from "../../UI/Input/Input";
import Submit from "../../UI/Submit/Submit";

import {CheckoutDatosStyled2, Form, Formik } from "./CheckoutFormStyles2";
import {checkoutInitialValues} from "../../../formik/initialValues"
import {checkoutValidationSchema} from "../../../formik/validationSchema"
import { createOrder } from "../../../axios/axios-orders";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../redux/cart/cartSlice";
import Loader from "../../UI/Loader/Loader";

const CheckoutForm = ({cartItems, shippingCost, price}) => {

  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  const navigate = useNavigate()

  return (
    <CheckoutDatosStyled2>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={ async (values) => {
          const orderData = {
            items: cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: {...values}
          };
          try {
            await (orderData, dispatch, currentUser);
            navigate("/gracias")
            dispatch(clearCart())
          } catch (error) {
            alert("Error al crear la orden")
          }
        }
      }
      >
        {
          ({isSubmitting}) => (
          <Form>
          <Input
            name= "name"
            htmlFor="nombre"
            type="text"
            id="nombre"
            placeholder="Tu nombre"
          >
            Nombre
          </Input>
          <Input
            name= "cellphone"
            htmlFor="celular"
            type="text"
            id="celular"
            placeholder="Tu celular"
          >
            Celular
          </Input>
          <Input
            name = "location"
            htmlFor="email"
            type="email"
            id="Correo"
            placeholder="Correo"
          >
            Correo
          </Input>
          <Input
            name = "address"
            htmlFor="direccion"
            type="text"
            id="Motivo"
            placeholder="Motivo"
          >
            Motivo
          </Input>
          <div>
            <Submit >
              {
                isSubmitting ? <Loader/> : "Iniciar Pedido"
              }
              </Submit>
          </div>
        </Form>
          )
        }
        
      </Formik>
    </CheckoutDatosStyled2>
  );
};

export default CheckoutForm;
