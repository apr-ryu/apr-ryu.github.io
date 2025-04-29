"use client";

//STYLE
import "./button.scss";

type MyProps = {
  children: string;
  handle: (e: React.MouseEvent<HTMLElement>) => void;
  color: "dark" | "light";
};

export default function Button({ children, handle, color }: MyProps) {
  return (
    <div className="button-wrapper">
      <p className={`button ${color}`} onClick={handle}>
        {children}
      </p>
    </div>
  );
}
