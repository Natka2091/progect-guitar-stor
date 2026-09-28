export type HeaderMenuItem = {
    name: string;
    path: string;
}

export type ProductType =
  | "guitalele"
  | "ukulele"
  | "banjo"
  | "electric-guitar"
  | "hollow-body"
  | "bass"
  | "resonator"
  | "acoustic-electric";

export type ProductCard = {
  id: number;
  slug: string;
  name: string;
  price: number;
  type: ProductType;
  image: string;
  rating: number;
  reviews: number;
  numberOfStrings: number;
  article: string;
};