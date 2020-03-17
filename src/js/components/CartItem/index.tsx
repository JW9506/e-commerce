import React from "react";
import { CartItem as CartItemShape } from "$redux/cart/reducer";
import "./index.scss";
import { DeepReadonly } from "utility-types";

interface CartItemProps {
  item: DeepReadonly<CartItemShape>;
}
const CartItem: React.FC<CartItemProps> = ({
  item: { imageUrl, price, name, quantity }
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
