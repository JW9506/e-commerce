import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotal, selectCartItems } from "$redux/cart/selector";
import "./index.scss";
import { RootState } from "$redux";
import CheckoutItem from "../../components/CheckoutItem/index";
import StripeCheckoutButton from "../../components/StripeCheckoutButton";

interface MapState {
  cartItems: RootState["cart"]["cartItems"]
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
      <div className="test-warning">
        *Use 4242 4242 4242 4242 with any EXP any CVC code to test
      </div>
      <StripeCheckoutButton price={cartTotal}/>
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
