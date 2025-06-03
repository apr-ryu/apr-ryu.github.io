"use client";
import Image from "next/image";
import { FiTrash } from "react-icons/fi";
import React from "react";
import Button from "@/app/components/button";
import { FiAlertCircle } from "react-icons/fi";

import "./cart.scss";
import { useCartContext } from "@/app/statics/constants/cartContext";

export default function CartPage() {
  const { state, dispatch } = useCartContext();
  return (
    <div id="cart">
      <p className="article-subtitle">CART</p>
      {state.cartItems.length > 0 ? (
        <div className="content-box">
          <div className="items-wrapper">
            {state.cartItems.map((cartItem, index) => (
              <div className="item-wrapper" key={index}>
                <div className="img-wrapper">
                  <Image
                    src={cartItem.thumbnail}
                    alt={`p0`}
                    quality={100}
                    fill={true}
                    priority={true}
                    sizes="100%"
                  />
                </div>
                <div className="info-wrapper">
                  <div>
                    <p className="item-name list-title">{cartItem.name}</p>
                    <p className="item-price list-title">${cartItem.price}</p>
                  </div>
                  <div>
                    <div className="count-wrapper">
                      <div
                        onClick={() => {
                          if (cartItem.quantity > 1) {
                            dispatch({
                              type: "remove",
                              payload: {
                                name: cartItem.name,
                                price: cartItem.price,
                                quantity: 1,
                                thumbnail: cartItem.thumbnail,
                              },
                            });
                          }
                        }}
                      >
                        -
                      </div>
                      <p className="item-quantity list-title">
                        {cartItem.quantity}
                      </p>
                      <div
                        onClick={() => {
                          dispatch({
                            type: "add",
                            payload: {
                              name: cartItem.name,
                              price: cartItem.price,
                              quantity: 1,
                              thumbnail: cartItem.thumbnail,
                            },
                          });
                        }}
                      >
                        +
                      </div>
                    </div>
                    <div className="remove-wrapper">
                      <p className="list-title">
                        ${cartItem.price * cartItem.quantity}
                      </p>
                      <div
                        className="icon-wrapper"
                        onClick={() =>
                          dispatch({
                            type: "remove",
                            payload: {
                              name: cartItem.name,
                              price: cartItem.price,
                              quantity: -1,
                              thumbnail: cartItem.thumbnail,
                            },
                          })
                        }
                      >
                        <FiTrash />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-wrapper">
            <div className="text-wrapper">
              <p className="article-title">SUBTOTAL :</p>
              <p className="article-title">
                $ {state.totalPrice} ( {state.totalQuantity} item(s) )
              </p>
            </div>
            <div className="text-wrapper">
              <p className="list-title">
                Shipping & taxes calculated at checkout
              </p>
            </div>

            <Button
              color="dark"
              handle={() => {
                alert("not ready!");
              }}
            >
              CHECK OUT
            </Button>
          </div>
        </div>
      ) : (
        <p className="no-result">
          <FiAlertCircle />
          NO ITEMS
        </p>
      )}
    </div>
  );
}
