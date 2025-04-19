// COMPONENTS
import axios from "axios";
import Swiper from "./components/swiper";
import SectionWithCards from "./components/section-with-cards";

// STATICS
import swiperList from "./statics/constants/swiperList";
import { productList } from "./statics/constants/productList";
import { articleList } from "./statics/constants/articleList";

export default async function Home() {
  axios.interceptors.response.use(function (response) {
    response.data = productList;
    return response;
  });

  const res = await axios.get("https://catfact.ninja/fact");
  const result = res.data;

  axios.interceptors.response.use(function (response) {
    response.data = articleList;
    return response;
  });

  const res2 = await axios.get("https://catfact.ninja/fact");
  const result2 = res2.data;

  return (
    <div id="page-home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
        <SectionWithCards
          classname="product"
          title="FEATURED PRODUCTS"
          subtitle="NEW IN"
          cardList={result}
          grid={4}
          maxDisplay={4}
        />
        <SectionWithCards
          classname="blog"
          subtitle="BLOG"
          cardList={result2}
          grid={3}
          borderTop
        />
      </div>
    </div>
  );
}
