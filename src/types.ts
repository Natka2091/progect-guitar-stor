export type HeaderMenuItem = {
    name: string;
    path: string;
}

export type ProductType =
  | "Guitalele"
  | "Ukulele"
  | "Banjo"
  | "Electric guitars"
  | "Hollow-body guitars"
  | "Bass guitars"
  | "Resonator guitars"
  | "Acoustic-electric guitars";

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