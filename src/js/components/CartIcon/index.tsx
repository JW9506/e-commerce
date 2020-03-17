import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { toggleCartHidden } from "$redux/cart/action";
import { selectCartItemsCount } from "$redux/cart/selector";
import "./index.scss";
import { RootState } from "$redux";

interface DispatchProps {
  toggleCartHidden: () => void;
}
interface StateProps {
  itemCount: number;
}
type CartIconProps = DispatchProps & StateProps;

const CartIcon: React.FC<CartIconProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <FaShoppingBag />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps: MapStateToProps<StateProps, {}, RootState> = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
