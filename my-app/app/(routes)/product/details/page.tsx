"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/button";

// STATICS
import { Product } from "@/app/statics/interfaces";
import { productList } from "@/app/statics/constants/productList";
import { interceptFetchData } from "@/app/statics/utils";
import { useCartContext } from "@/app/statics/constants/cartContext";

// STYLES
import "./product-details.scss";

export default function ProductDetailsPage() {
  const DetailsWrapper = () => {
    const [productDetails, setProductDetails] = useState<Product | null>(null);
    const [count, setCount] = useState<number>(1);
    const { cart, setCart } = useCartContext();
    const searchParams = useSearchParams();
    const productID = searchParams.get("id");

    const fetchProductDetails = useCallback(async () => {
      const response = await interceptFetchData<Product[]>(productList);
      let productDetails: Product | null = null;
      for (let index = 0; index < response.length; index++) {
        if (response[index].id.includes(productID!)) {
          productDetails = response[index];
          break;
        }
      }
      setProductDetails(productDetails);
    }, []);

    const handleOnclick = (action: string) => {
      if (action === "add") {
        setCount(count + 1);
      } else if (action === "subtract" && count > 1) {
        setCount(count - 1);
      }
    };

    useEffect(() => {
      if (productID) {
        fetchProductDetails();
      }
    }, [productID]);

    return (
      <>
        {productDetails && (
          <div className="scroll-wrapper">
            <div className="left scroll-box">
              <div className="description-wrapper">
                <p className="product-name bold">{productDetails.title}</p>
                <p className="product-price bold">${productDetails.subtitle}</p>
                <p className="product-description">
                  {productDetails.description}
                </p>
                <div className="product-spec">
                  <p className="bold"> Product Specs:</p>
                  <p>{productDetails.specs}</p>
                </div>
                {productDetails.note.length > 0 &&
                  productDetails.note.map((note, index) => (
                    <p className="product-note" key={index}>
                      • {note}
                    </p>
                  ))}
                <div className="count-wrapper">
                  <div
                    onClick={() => {
                      handleOnclick("subtract");
                    }}
                  >
                    -
                  </div>
                  <p>{count}</p>
                  <div
                    onClick={() => {
                      handleOnclick("add");
                    }}
                  >
                    +
                  </div>
                </div>
                <Button color="dark" handle={() => setCart(cart + count)}>
                  ADD TO CART
                </Button>
              </div>
            </div>
            <div className="right scroll-box">
              {productDetails.img.map((src, index) => (
                <div className="img-wrapper" key={index}>
                  <Image
                    src={src}
                    alt={`${index}`}
                    quality={100}
                    fill={true}
                    priority={true}
                    sizes="100%"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div id="product-detail">
      <Suspense>
        <DetailsWrapper />
      </Suspense>
    </div>
  );
}
