type FooterList = {
  title: string;
  text?: string;
  subtitle?: string[];
};

const FooterList: FooterList[] = [
  {
    title: "ABOUT MOGUTABLE",
    text: `Well-Made Objects for Everyday Life
           130 Grand St, Brooklyn, NY 11249
           © 2021 MOGUTABLE ALL RIGHTS RESERVED`,
  },
  {
    title: "SHOP",
    subtitle: [`Kitchen & Dining`, `Living`],
  },
  {
    title: "INFO",
    subtitle: [
      `About Us`,
      `Contact`,
      `Shipping & Return`,
      `FAQ`,
      `Accessibility`,
    ],
  },
];
export default FooterList;
