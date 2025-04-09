import { StaticImageData } from "next/image";
import img1 from "@/public/images/banner1.jpg";
import img2 from "@/public/images/banner2.jpg";
import img3 from "@/public/images/banner3.jpg";

export type SwiperData = {
  name: string;
  img: StaticImageData;
  slideTitle: string;
  slideText: string;
};

const SwiperList: SwiperData[] = [
  {
    name: "banner-img1",
    img: img1,
    slideTitle: "Curated Tablewares & Home Goods",
    slideText: "Meet our unique home decor items. ",
  },
  {
    name: "banner-img1",
    img: img2,
    slideTitle: "Perfect Pieces to Elevate Your Daily Routine",
    slideText: "Enhance your everyday life",
  },
  {
    name: "banner-img1",
    img: img3,
    slideTitle: "Well-mdae Objects for Everyday Life",
    slideText: "Experience the beauty of functional design.",
  },
];
export default SwiperList;
