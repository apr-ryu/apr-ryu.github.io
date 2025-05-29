"use client";

import {
  createContext,
  useContext,
  useState,
  useReducer,
  ReactNode,
} from "react";

type CartItems = {
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
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

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState(0);

  return (
    // <CartContext.Provider value={{ cart, setCart }}>
    //   {children}
    // </CartContext.Provider>
    <></>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
