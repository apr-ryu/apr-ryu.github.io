"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";

export default function ExContext() {
  const example = createContext<null | string>("null");
  const [theme, setTheme] = useState("light");
  return (
    <example.Provider value={theme}>
      <div>exContext</div>;
    </example.Provider>
  );
}
