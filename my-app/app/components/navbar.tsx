"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

// COMPONENTS
import SearchBar from "./search-bar";

// ICON
import { FiUser, FiShoppingCart, FiMenu } from "react-icons/fi";
import { useCartContext } from "../statics/constants/cartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { cart } = useCartContext();
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  return (
    <>
      {pathname !== "/" && <div className="page-top-margin" />}
      <nav>
        <div>
          <div>
            <Link href={"/shop/kitchen&dining"}>Kitchen & Dining</Link>
          </div>
          <div>
            <Link href={"/shop/living"}>Living</Link>
          </div>
          <div className={`${toggle ? "active" : "inactive"}`}>
            <FiMenu
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div id="nav-mb">
              <div>
                <SearchBar />
              </div>
              <div>
                <Link href={"/shop/kitchen&dining"}>Kitchen & Dining</Link>
              </div>
              <div>
                <Link href={"/shop/living"}>Living</Link>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <h1>mogutable.</h1>
        </Link>
        <div>
          <SearchBar />
          <div onClick={() => router.push(`/cart`)}>
            <FiShoppingCart />
            {/* {state.totalQuantity} */}
            {cart}
          </div>
          <div onClick={() => router.push(`/account/login`)}>
            <FiUser />
          </div>
        </div>
      </nav>
    </>
  );
}
