import React, { ReactElement } from "react";

type MyProps = {
  title: string;
  subtitle: string;
  children: ReactElement;
};

export default function Paragraph({ title, subtitle, children }: MyProps) {
  return (
    <div className="paragraph">
      <p className="article-title">{title}</p>
      <p className="article-subtitle">{subtitle}</p>
      <div className="article-contents">{children}</div>
    </div>
  );
}
