"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

// STYLES
import "./cards.scss";

export type CardData = {
  id?: number | string;
  title: string;
  subtitle?: number | string;
  preview?: string;
  img: StaticImageData[] | string[];
};

type MyProps = {
  classname: string;
  cardList: CardData[];
  grid: 3 | 4;
  maxDisplay: number | undefined;
};

export default function Cards({
  classname,
  cardList,
  grid,
  maxDisplay,
}: MyProps) {
  const router = useRouter();
  return (
    <div className="card-wrapper">
      {cardList?.map(
        (item, index) =>
          (!maxDisplay || (maxDisplay && index + 1 <= maxDisplay)) && (
            <div key={index} className={`grid-${grid} card`}>
              <div
                onClick={() => {
                  router.push(`/${classname}/details?id=${item.id}`);
                }}
              >
                <Image
                  src={item.img[0]}
                  alt={item.title}
                  quality={100}
                  fill={true}
                  sizes={"100%"}
                  priority={true}
                />
              </div>
              <p>{item.title}</p>
              {item.subtitle && (
                <p>
                  {typeof item.subtitle === "number" && "$"}
                  {item.subtitle}
                </p>
              )}
              {item.preview && <p className="preview">{item.preview}</p>}
            </div>
          )
      )}
    </div>
  );
}
