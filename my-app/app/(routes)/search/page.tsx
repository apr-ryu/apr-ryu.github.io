"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// COMPONENTS
import SectionWithCards from "@/app/components/section-with-cards";

// STATICS
import { interceptFetchData } from "@/app/statics/utils";
import { Product } from "@/app/statics/interfaces";
import { productList } from "@/app/statics/constants/productList";

// STYLES
import "./search.scss";

export default function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const response = await interceptFetchData<Product[]>(productList);
    setProducts(response);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const SearchWrapper = () => {
    const searchParams = useSearchParams();
    const search: string | null = searchParams.get("keyword");
    const [searchResults, setSearchResults] = useState<Product[] | null>(null);

    const searchItems = (keyword: string): void => {
      let searchResultsList: Product[] = [];
      for (let i = 0; i < products.length; i++) {
        if (products[i].id.includes(keyword)) {
          searchResultsList = [...searchResultsList, products[i]];
        }
      }
      setSearchResults(searchResultsList);
    };

    useEffect(() => {
      if (products.length > 0 && search) {
        searchItems(search);
      }
    }, [search]);

    return (
      <SectionWithCards
        classname="product"
        title="SEARCH RESULT"
        subtitle={search ? search : ""}
        cardList={searchResults ? searchResults : []}
        noResult={searchResults?.length === 0}
        grid={4}
      />
    );
  };

  return (
    <div id="search">
      <Suspense>
        <SearchWrapper />
      </Suspense>
    </div>
  );
}
