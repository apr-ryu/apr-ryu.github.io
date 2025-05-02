import { redirect } from "next/navigation";

// COMPONENTS
import Swiper from "./components/swiper";
import Button from "./components/button";
import SectionWithCards from "./components/section-with-cards";

// STATICS
import swiperList from "./statics/constants/swiperList";
import { productList } from "./statics/constants/productList";
import { articleList } from "./statics/constants/articleList";
import { Product, Article } from "./statics/interfaces";

// UTILITIES
import { interceptFetchData } from "./statics/utils";

const viewAllProducts = async () => {
  "use server";
  redirect("/shop/all-products");
};

export default async function Home() {
  const products = await interceptFetchData<Product[]>(productList);
  const articles = await interceptFetchData<Article[]>(articleList);

  return (
    <div id="home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
      </div>
      <SectionWithCards
        classname="product"
        title="FEATURED PRODUCTS"
        subtitle="NEW IN"
        cardList={products}
        grid={4}
        maxDisplay={4}
      />
      <Button color={"light"} handle={viewAllProducts}>
        VIEW ALL PRODUCTS
      </Button>
      <SectionWithCards
        classname="blog"
        subtitle="BLOG"
        cardList={articles}
        grid={3}
        borderTop
      />
    </div>
  );
}
