"use client";

import { FiTrash } from "react-icons/fi";
import React from "react";
import Button from "@/app/components/button";

import "./cart.scss";

export default function CartPage() {
  return (
    <div id="cart">
      <p className="article-subtitle">CART</p>
      <div className="content-box">
        <div className="items-wrapper">
          <div className="item-wrapper">
            <div className="img-wrapper"></div>
            <div className="info-wrapper">
              <div>
                <p className="item-name list-title">mug</p>
                <p className="item-price list-title">$0</p>
              </div>
              <div>
                <div className="count-wrapper">
                  <div>-</div>
                  <p className="item-quantity list-title">1</p>
                  <div>+</div>
                </div>
                <div className="remove-wrapper">
                  <p className="list-title">$20</p>
                  <div className="icon-wrapper">
                    <FiTrash />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-wrapper">
          <div className="text-wrapper">
            <p className="article-title">SUBTOTAL :</p>
            <p className="article-title">$ 20 ( 1 item(s) )</p>
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
    </div>
  );
}
