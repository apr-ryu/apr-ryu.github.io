// COMPONENTS
import Swiper from "./components/swiper";
import SectionWithCards from "./components/section-with-cards";

// STATICS
import swiperList from "./statics/constants/swiperList";

export default async function Home() {
  const data = await fetch("http://localhost:4000/products", {
    next: { revalidate: 0 },
  });
  const productsList = await data.json();

  return (
    <div id="page-home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
        <SectionWithCards
          classname="product"
          title="FEATURED PRODUCTS"
          subtitle="NEW IN"
          cardList={productsList}
          grid={4}
          maxDisplay={4}
        />
      </div>
    </div>
  );
}
