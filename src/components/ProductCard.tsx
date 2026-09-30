import type { ProductCard as ProductCardType } from "../types";
import { FiShoppingCart } from "react-icons/fi";
import { Rating } from "../components/Raiting";

type Props = {
  product: ProductCardType;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="flex h-full flex-col border border-[#E5E5E5] bg-white p-3">

      <div className="flex h-[220px] items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <Rating
        rating={product.rating}
        reviews={product.reviews}
      />

      <div className="mt-1 flex items-start justify-between gap-2">
        <h3 className="text-sm leading-5 text-[#333]">
          {product.name}
        </h3>

        <span className="shrink-0 text-sm font-medium text-[#333]">
          {product.price.toLocaleString("en-US")} €
        </span>
      </div>

      <div className="mt-auto flex gap-1 pt-4">
        <button
          type="button"
          className="flex-1 bg-[#C7C7C7] p-2 text-[11px] text-white transition hover:bg-[#AFAFAF]"
        >
          Details
        </button>

        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 bg-[#F39800] p-2 text-sm font-medium text-white transition hover:bg-[#D98200]"
        >
          <FiShoppingCart size={18} />
          <span>Buy</span>
        </button>
      </div>
    </article>
  );
}