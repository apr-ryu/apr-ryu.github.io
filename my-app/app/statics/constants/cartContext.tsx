"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export const cartContext = createContext<{
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
}>({ cart: 0, setCart: () => {} });

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState(0);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(cartContext);
};
