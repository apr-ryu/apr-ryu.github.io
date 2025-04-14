// COMPONENTS
import Swiper from "./components/swiper";
import SectionWithCards from "./components/section-with-cards";

// STATICS
import swiperList from "./statics/constants/swiperList";

//MOCKUP DATA
const mockData = [
  {
    id: "wine-glass-in-smoke",
    collection: "kitchen&dining",
    title: "WINE GLASS IN SMOKE",
    subtitle: 18,
    img: [
      "/images/product01.jpg",
      "/images/product01_01.jpg",
      "/images/product01_02.jpg",
    ],
    description:
      "Finally, a wine glass that combines a delicate aesthetic with the ease of comfort. Made for convenience and flexibility of use, this piece even has a hidden shot glass in its stem for ultimate versatility. Available in Clear or Smoke. Sold individually. allments for orders over $50 with Learn more 4 ADD TO CART. Finally, a wine glass that combines a delicate aesthetic with the ease of comfort.Available in Clear or Smoke. Sold individually.",
    specs: 'L2.8" x W2.8" x H5.2" / 10 oz Ceramic',
    note: [],
  },
  {
    id: "little-bowl-in-slate-gray",
    collection: "kitchen&dining",
    title: "LITTLE BOWL IN SLATE GRAY",
    subtitle: 16,
    img: ["/images/product02.jpg", "/images/product02_01.jpg"],
    description:
      "This little stoneware bowl is as timeless as it is tactile: a wide angle from base to rim means there’s no need to compromise between function and form, and the half-lip edge offers a talking-point design feature without needing to say a word. Ideal for individual snacks, the Little Bowl’s rims can also be combined to create a playfully tessellating centrepiece.",
    specs: 'L4.4" x W4.9" x H1.7" Ceramic',
    note: [],
  },
  {
    id: "little-bowl-in-tobacco",
    collection: "kitchen&dining",
    title: "LITTLE BOWL IN TOBACCO",
    subtitle: 16,
    img: ["/images/product03.jpg", "/images/product03_01.jpg"],
    description:
      "This little stoneware bowl is as timeless as it is tactile: a wide angle from base to rim means there’s no need to compromise between function and form, and the half-lip edge offers a talking-point design feature without needing to say a word. Ideal for individual snacks, the Little Bowl’s rims can also be combined to create a playfully tessellating centrepiece.",
    specs: 'L4.4" x W4.9" x H1.7" Ceramic',
    note: [],
  },
  {
    id: "little-bowl-in-chalk",
    collection: "kitchen&dining",
    title: "LITTLE BOWL IN CHALK",
    subtitle: 16,
    img: ["/images/product04.jpg", "/images/product04_01.jpg"],
    description:
      "This little stoneware bowl is as timeless as it is tactile: a wide angle from base to rim means there’s no need to compromise between function and form, and the half-lip edge offers a talking-point design feature without needing to say a word. Ideal for individual snacks, the Little Bowl’s rims can also be combined to create a playfully tessellating centrepiece.",
    specs: 'L4.4" x W4.9" x H1.7" Ceramic',
    note: [],
  },
];

export default function Home() {
  return (
    <div id="page-home">
      <div className="full-size-swiper">
        <Swiper swiperList={swiperList} />
        <SectionWithCards
          classname="product"
          title="FEATURED PRODUCTS"
          subtitle="NEW IN"
          cardList={mockData}
          grid={4}
          maxDisplay={4}
        />
      </div>
    </div>
  );
}
