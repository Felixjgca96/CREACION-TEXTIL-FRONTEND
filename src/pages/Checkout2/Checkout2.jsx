import CheckoutForm2 from "../../components/Checkout/Form2/CheckoutForm2";
import ProductsCheckout from "../../components/Checkout/Products/ProductsCheckout";
import { ContainerCheckoutStyled2 } from "../Checkout2/CheckoutStyles2";

import {useSelector} from "react-redux"

const Checkout2 = () => {

  const {cartItems, shippingCost} = useSelector((state) => state.cart)

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity)
  }, 0);

  return (
    <div>
      <ContainerCheckoutStyled2>
        <CheckoutForm2
          cartItems = {cartItems}
          shippingCost = {shippingCost}
          price = {price}
        />
      </ContainerCheckoutStyled2>
    </div>
  );
};

export default Checkout2;
