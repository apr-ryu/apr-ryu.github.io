type ArticleData = {
  id: number;
  title: string;
  preview: string;
  img: string[];
};

export const articleList: ArticleData[] = [
  {
    id: 1,
    title: "RECIPE: CLAYPOT SESAME OIL CHICKEN RICE",
    preview:
      "Inspired by a Taiwanese dish Sesame Oil Chicken Soup (麻油雞), this dish is essentially a non-soup version of the Taiwanese dish. ",
    img: ["/images/blog02.jpg"],
  },
  {
    id: 2,
    title: "WE ALL NEED SOME MATCHA IN OUR LIVES",
    preview:
      "What comes to mind with the word “matcha”? A matcha latte? Your favorite cafe? ",
    img: ["/images/blog01.jpg"],
  },
  {
    id: 3,
    title: "GUIDE: CERAMIC POTTERY VS. PORCELAIN",
    preview:
      "More often than not, “ceramics” is used as a blanket term to describe both pottery (earthenware) and porcelain. ",
    img: ["/images/blog03.jpg"],
  },
];
