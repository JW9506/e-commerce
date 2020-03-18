import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { toggleCartHidden } from "$redux/cart/action";
import { selectCartItemsCount } from "$redux/cart/selector";
import "./index.scss";
import { RootState } from "$redux";

interface MapDispatchProps {
  toggleCartHidden: () => void;
}
interface MapStateProps {
  itemCount: number;
}
type CartIconProps = MapDispatchProps & MapStateProps;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <FaShoppingBag />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps: MapStateToProps<MapStateProps, {}, RootState> = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps: MapDispatchToProps<MapDispatchProps, {}> = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
