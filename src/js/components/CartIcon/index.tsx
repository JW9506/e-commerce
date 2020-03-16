import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { connect, MapDispatchToProps } from "react-redux";
import { toggleCartHidden } from "$redux/cart/action";
import "./index.scss";

interface DispatchProps {
  toggleCartHidden: () => void;
}
type CartIconProps = DispatchProps;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden }) => {
  return <div className="cart-icon" onClick={toggleCartHidden}>
    <FaShoppingBag />
    <span className="item-count">0</span>
  </div>;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
