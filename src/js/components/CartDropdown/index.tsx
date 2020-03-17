import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { CartItem as CartItemShape } from "$redux/cart/reducer";
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
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, RootState> = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
