import React from "react";
import Cards, { CardData } from "./cards";
import { FiAlertCircle } from "react-icons/fi";

type MyProps = {
  classname: string;
  title?: string;
  subtitle?: string;
  cardList: CardData[];
  noResult?: boolean;
  grid: 3 | 4;
  maxDisplay?: number;
  borderTop?: boolean;
};

export default function SectionWithCards({
  classname,
  title,
  subtitle,
  cardList,
  noResult,
  grid,
  maxDisplay,
  borderTop,
}: MyProps) {
  return (
    <div
      className={`section-with-cards ${classname} ${
        borderTop ? `border-top` : ""
      }`}
    >
      <p className="article-title">{title && title}</p>
      <p className="article-subtitle">{subtitle && subtitle}</p>
      {!noResult ? (
        <Cards
          classname={classname}
          cardList={cardList}
          grid={grid}
          maxDisplay={maxDisplay}
        />
      ) : (
        <>
          <p className="no-result">
            <FiAlertCircle />
            NO RESULTS
          </p>
        </>
      )}
    </div>
  );
}
