import "./Cart.css"
import {Button} from "../Button/Button.jsx";

export const Cart = ({cartItems, onCheckout}) => {
  // const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  return (
    <div className="cards__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br/> <span className="">Total Price: </span>
      <Button title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
              type={"checkout"}
              disable={cartItems.length === 0}
              onClick={onCheckout}
      />
    </div>
  );
};