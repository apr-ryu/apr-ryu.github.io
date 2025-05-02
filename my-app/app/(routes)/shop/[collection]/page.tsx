import React from "react";

// COMPONENTS
import CollectionWrapper from "./collectionWrapper";

// STATICS
import { interceptFetchData } from "@/app/statics/utils";
import { Product } from "@/app/statics/interfaces";
import { productList } from "@/app/statics/constants/productList";

// STYLE
import "../shop.scss";

export const dynamic = "force-static";
export const dynamicParams = false;

type MyProps = {
  params: Promise<{ collection: string }>;
};

export async function generateStaticParams() {
  return [
    { collection: "living" },
    { collection: "kitchen&dining" },
    { collection: "all-products" },
  ];
}

export default async function ShopPage({ params }: MyProps) {
  const { collection } = await params;
  const response = await interceptFetchData<Product[]>(productList);

  return (
    <div id="shop">
      <CollectionWrapper response={response} collection={collection} />
    </div>
  );
}
