import { CartItem } from "./reducer";
import { DeepReadonly } from "utility-types";
import { Item } from "../shop/reducer";

export const addItemToCart = (
  cartItems: DeepReadonly<CartItem[]>,
  cartItemToAdd: Item
): DeepReadonly<CartItem[]> => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: DeepReadonly<CartItem[]>,
  cartItemToRemove: Item
): DeepReadonly<CartItem[]> => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return cartItems;
};
