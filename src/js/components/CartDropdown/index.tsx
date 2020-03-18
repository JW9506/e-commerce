import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import CartItem from "../CartItem";
import { selectCartItems, selectCartItemsShape } from "$redux/cart/selector";
import { createStructuredSelector } from "reselect";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { RootState } from "$redux";
import { useHistory } from "react-router-dom";
import { PUBLIC_URL } from "Config";
import { toggleCartHidden } from "$redux/cart/action";

interface StateProps {
  cartItems: selectCartItemsShape;
}
interface DispatchProps {
  toggleHidden: () => void;
}
type CartDropdownProps = StateProps & DispatchProps;
const CartDropdown: React.FC<CartDropdownProps> = ({
  cartItems,
  toggleHidden
}) => {
  const H = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="empty-message">Your cart is empty</div>
        )}
      </div>

      <CustomButton
        onClick={() => {
          H.push(`${PUBLIC_URL}/checkout`);
          toggleHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
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

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  toggleHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
