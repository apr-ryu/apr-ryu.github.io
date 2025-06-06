"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import Image from "next/image";

// COMPONENTS
import Button from "@/app/components/button";
import Swiper from "@/app/components/swiper";
import { SwiperData } from "@/app/statics/constants/swiperList";

// STATICS
import { Product } from "@/app/statics/interfaces";
import { productList } from "@/app/statics/constants/productList";
import { interceptFetchData } from "@/app/statics/utils";
import { useCartContext } from "@/app/statics/constants/cartContext";

// STYLES
import "./product-details.scss";

export default function ProductDetailsPage() {
  const DetailsWrapper = () => {
    const [productDetails, setProductDetails] = useState<
      Product | null | undefined
    >(null);
    const [count, setCount] = useState<number>(1);
    const searchParams = useSearchParams();
    const productID = searchParams.get("id");
    const { dispatch } = useCartContext();

    const fetchProductDetails = useCallback(async () => {
      const response = await interceptFetchData<Product[]>(productList);
      let productDetails: Product | null = null;
      for (let index = 0; index < response.length; index++) {
        if (response[index].id === productID) {
          productDetails = response[index];
          break;
        }
      }
      if (productDetails === null) {
        setProductDetails(undefined);
      } else {
        setProductDetails(productDetails);
      }
    }, []);

    const fetchSwiperList = useCallback((imageList: string[]) => {
      let swiperList: SwiperData[] = [];
      for (let index = 0; index < imageList.length; index++) {
        swiperList = [
          ...swiperList,
          { name: `product-img-${index}`, img: imageList[index] },
        ];
      }
      return swiperList;
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
        {productDetails === undefined && notFound()}
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
                <Button
                  color="dark"
                  handle={() =>
                    dispatch({
                      type: "add",
                      payload: {
                        name: productDetails.title,
                        price: productDetails.subtitle,
                        quantity: count,
                        thumbnail: productDetails.img[0],
                      },
                    })
                  }
                >
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
            <div className="mb-size-swiper">
              <Swiper swiperList={fetchSwiperList(productDetails.img)} fill />
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
