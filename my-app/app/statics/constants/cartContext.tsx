"use client";

import { createContext, useContext, useReducer } from "react";
import { StaticImageData } from "next/image";

type CartItems = {
  name: string;
  price: number;
  quantity: number;
  thumbnail: string | StaticImageData;
};

type CartState = {
  totalQuantity: number;
  totalPrice: number;
  cartItems: CartItems[];
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<{
    type: string;
    payload: CartItems;
    fetchData?: CartState;
  }>;
}>({
  state: { totalQuantity: 0, totalPrice: 0, cartItems: [] },
  dispatch: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  function reducer(
    state: CartState,
    action: { type: string; payload: CartItems; fetchData?: CartState }
  ) {
    const filteredIndex = state.cartItems.findIndex(
      (element) => element.name === action.payload.name
    );
    switch (action.type) {
      case "add":
        if (filteredIndex > -1) {
          const updatedItems = [...state.cartItems];
          updatedItems[filteredIndex] = {
            name: action.payload.name,
            price: action.payload.price,
            quantity:
              state.cartItems[filteredIndex].quantity + action.payload.quantity,
            thumbnail: action.payload.thumbnail,
          };
          return {
            totalQuantity: state.totalQuantity + action.payload.quantity,
            totalPrice:
              state.totalPrice + action.payload.price * action.payload.quantity,
            cartItems: updatedItems,
          };
        } else {
          return {
            totalQuantity: state.totalQuantity + action.payload.quantity,
            totalPrice:
              state.totalPrice + action.payload.price * action.payload.quantity,
            cartItems: [...state.cartItems, action.payload],
          };
        }
      case "remove":
        if (action.payload.quantity != -1) {
          const updatedItems = [...state.cartItems];
          updatedItems[filteredIndex] = {
            name: action.payload.name,
            price: action.payload.price,
            quantity: state.cartItems[filteredIndex].quantity - 1,
            thumbnail: action.payload.thumbnail,
          };
          return {
            totalQuantity: state.totalQuantity - 1,
            totalPrice:
              state.totalPrice - action.payload.price * action.payload.quantity,
            cartItems: updatedItems,
          };
        } else {
          const updatedItems = [...state.cartItems];
          updatedItems.splice(filteredIndex, 1);
          return {
            totalQuantity:
              state.totalQuantity - state.cartItems[filteredIndex].quantity,
            totalPrice:
              state.totalPrice -
              action.payload.price * state.cartItems[filteredIndex].quantity,
            cartItems: updatedItems,
          };
        }
      default:
        throw new Error("Unsupported action type:");
    }
  }

  const [state, dispatch] = useReducer(
    reducer,
    // typeof window !== "undefined" && localStorage.getItem("myCat") !== null
    //   ? JSON.parse(localStorage.getItem("myCat")!)
    //   :
    {
      totalQuantity: 0,
      totalPrice: 0,
      cartItems: [],
    }
  );
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
