import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";

const CartDropdown: React.FC = props => {
  return <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>;
};

export default CartDropdown;
