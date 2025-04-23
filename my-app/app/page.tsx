// COMPONENTS
import Swiper from "./components/swiper";
import SectionWithCards from "./components/section-with-cards";

// STATICS
import swiperList from "./statics/constants/swiperList";
import { productList } from "./statics/constants/productList";
import { articleList } from "./statics/constants/articleList";
import { Product, Article } from "./statics/interfaces";

// UTILITIES
import { interceptFetchData } from "./statics/utils";

export default async function Home() {
  const products = await interceptFetchData<Product[]>(productList);
  const articles = await interceptFetchData<Article[]>(articleList);

  return (
    <div id="page-home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
        <SectionWithCards
          classname="product"
          title="FEATURED PRODUCTS"
          subtitle="NEW IN"
          cardList={products}
          grid={4}
          maxDisplay={4}
        />
        <SectionWithCards
          classname="blog"
          subtitle="BLOG"
          cardList={articles}
          grid={3}
          borderTop
        />
      </div>
    </div>
  );
}
