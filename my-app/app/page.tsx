// COMPONENTS
import Swiper from "./components/swiper";

// STATICS
import swiperList from "./statics/constants/swiperList";

export default function Home() {
  return (
    <div id="page-home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
      </div>
    </div>
  );
}
