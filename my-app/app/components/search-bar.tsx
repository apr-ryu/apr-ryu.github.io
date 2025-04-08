"use client";

import React, { useRef, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchKeyword = useRef<HTMLInputElement>(null);

  const [placeholder, setPlaceholder] = useState<string>("Search");

  const handleSearch = () => {
    if (
      !searchKeyword ||
      searchKeyword.current!.value === "" ||
      searchKeyword.current!.value.trim().length === 0
    ) {
      setPlaceholder("Please enter the keyword");
    } else {
      router.push(`/search?keyword=${searchKeyword.current?.value}`);
    }
  };

  const handleChange = (): void => {
    setPlaceholder(searchKeyword.current!.value);
  };

  useEffect(() => {
    if (!pathname.includes("search")) {
      searchKeyword.current!.value = "";
      setPlaceholder("Search");
    }
  }, [pathname]);

  return (
    <>
      <input
        type="text"
        ref={searchKeyword}
        placeholder={placeholder}
        autoComplete="off"
        onChange={handleChange}
        // onKeyDown={(e) => {
        //   e.key === "Enter" && handleSearch();
        // }}
      />
      <div onClick={handleSearch}>
        <FiSearch />
      </div>
    </>
  );
}
