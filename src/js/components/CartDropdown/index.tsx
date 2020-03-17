import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { CartItem as CartItemShape } from "$redux/cart/reducer";
import { selectCartItems } from "$redux/cart/selector";
import { createStructuredSelector } from "reselect";
import { connect, MapStateToProps } from "react-redux";
import { RootState } from "$redux";
import { DeepReadonly } from "utility-types";

interface StateProps {
  cartItems: DeepReadonly<CartItemShape[]>;
}
type CartDropdownProps = StateProps;
const CartDropdown: React.FC<CartDropdownProps> = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? (cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))) : <div className="empty-message">Your cart is empty</div>
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  StateProps,
  {},
  RootState
> = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
