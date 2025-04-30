"use client";
import React, { useEffect, useState } from "react";
import SectionWithCards from "@/app/components/section-with-cards";

// STATICS
import { Product } from "@/app/statics/interfaces";

type MyProps = {
  response: Product[];
  collection: string;
};

export default function CollectionWrapper({ response, collection }: MyProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const filterProducts = (collection: string) => {
    let filteredList: Product[] = [];
    response.forEach((element) => {
      if (collection === "kitchen%26dining") {
        collection = "kitchen&dining";
      }
      if (element.collection === collection) {
        filteredList = [...filteredList, element];
      }
    });
    setProducts(filteredList);
  };

  useEffect(() => {
    if (collection === "all-products") {
      setProducts(response);
    } else {
      filterProducts(collection);
    }
  }, []);

  return (
    (collection === "all-products" ||
      collection === "living" ||
      collection === "kitchen%26dining") && (
      <SectionWithCards
        classname="product"
        title="SHOP"
        subtitle={
          collection === "all-products"
            ? "ALL PRODUCTS"
            : collection === "living"
            ? "LIVING"
            : collection === "kitchen%26dining"
            ? "KITCHEN & DINING"
            : ""
        }
        cardList={products}
        grid={4}
      />
    )
  );
}
