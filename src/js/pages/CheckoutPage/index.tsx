import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal, selectCartItems } from "$redux/cart/selector";
import "./index.scss";
import { CartItem } from "$redux/cart/reducer";
import { RootState } from "$redux";
import CheckoutItem from "../../components/CheckoutItem/index";

interface MapState {
  cartItems: CartItem[];
  cartTotal: number;
}

type CheckoutPageProps = MapState;

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  cartTotal
}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${cartTotal}</span>
      </div>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  MapState,
  {},
  RootState
> = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
