"use client";
import { createContext, useState, ReactNode } from "react";
export const april = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({ theme: "april", setTheme: () => {} });

export default function ExContext({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("sd");

  return (
    <april.Provider value={{ theme, setTheme }}>{children};</april.Provider>
  );
}
// export const useAprilContext = () => {
//   return useContext(april);
// };
