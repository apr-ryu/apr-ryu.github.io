"use client";
import { redirect } from "next/navigation";

//STYLE
import "./button.scss";

type MyProps = {
  children: string;
  handle?: (e: React.MouseEvent<HTMLElement>) => void;
  color: "dark" | "light";
  url?: string;
};

export default function Button({ children, handle, color, url }: MyProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (url) {
      redirect(url);
    } else if (handle) {
      handle(e);
    } else {
      alert("not ready!");
    }
  };

  return (
    <div className="button-wrapper">
      <p className={`button ${color}`} onClick={handleClick}>
        {children}
      </p>
    </div>
  );
}
