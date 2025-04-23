export type Product = {
  id: string;
  collection?: string;
  title: string;
  subtitle: number;
  img: string[];
  description: string;
  specs: string;
  note: string[];
};

export type Article = {
  id: number;
  title: string;
  preview: string;
  img: string[];
};
