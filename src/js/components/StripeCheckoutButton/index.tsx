import React from "react";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { StripePublishableKey } from "Config";

interface StripeCheckoutButton {
  price: number;
}
const StripeCheckoutButton: React.FC<StripeCheckoutButton> = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token: Token) => {
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      token={onToken}
      stripeKey={StripePublishableKey}
      label="Pay Now"
      name="E-Commerce!"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
    />
  );
};

export default StripeCheckoutButton;
