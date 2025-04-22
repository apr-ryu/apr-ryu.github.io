// COMPONENTS
import Swiper from "./components/swiper";
import SectionWithCards from "./components/section-with-cards";

// STATICS
import swiperList from "./statics/constants/swiperList";
import { productList, ProductData } from "./statics/constants/productList";
import { articleList, ArticleData } from "./statics/constants/articleList";

// UTILITIES
import { interceptFetchData } from "./statics/utils";

export default async function Home() {
  const products = await interceptFetchData<ProductData>(productList);
  const articles = await interceptFetchData<ArticleData>(articleList);

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
