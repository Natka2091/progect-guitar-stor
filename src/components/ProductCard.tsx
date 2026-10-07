import type { ProductCard as ProductCardType } from "../types";
import { FiShoppingCart } from "react-icons/fi";
import { Rating } from "../components/Raiting";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "./Modal";

type Props = {
  product: ProductCardType;
};

export function ProductCard({ product }: Props) {

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  return (
    <>
      <article className="flex h-full flex-col border border-[#E5E5E5] bg-white p-3">

        <div className="flex h-55 items-center justify-center">
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
            onClick={() => setIsAddOpen(true)}
            className="flex flex-1 items-center justify-center gap-2 bg-[#F39800] p-2 text-sm font-medium text-white transition hover:bg-[#D98200]"
          >
            <FiShoppingCart size={18} />
            <span>Buy</span>
          </button>

        </div>
      </article>

      {(isAddOpen || isSuccessOpen) &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-black/40">

            {isAddOpen && (
              <Modal
                onClose={() => setIsAddOpen(false)}
                className="w-140 px-6 py-5"
              >
                <h2 className="mb-4 text-sm font-semibold">
                  Add item to cart
                </h2>

                <div className="flex items-center gap-5">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="text-sm font-bold uppercase">
                      {product.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      Article: {product.article}
                    </p>

                    <p className="text-xs text-gray-500">
                      Electric Guitar
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      Price: {product.price.toLocaleString("en-US")} €
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSuccessOpen(true)}
                    className="shrink-0 bg-[#F39800] px-5 py-3 text-xs font-medium text-white"
                  >
                    Add to cart
                  </button>

                </div>
              </Modal>
            )}

            {isSuccessOpen && (
              <Modal
                onClose={() => setIsSuccessOpen(false)}
                className="w-140 px-6 py-5"
              >
                <h2 className="mb-5 text-sm font-semibold">
                  Item successfully added to cart
                </h2>

                <div className="flex gap-4">

                  <button
                    type="button"
                    className="bg-[#F39800] px-5 py-3 text-xs font-medium text-white"
                  >
                    Go to cart
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsAddOpen(false);
                      setIsSuccessOpen(false);
                    }}
                    className="border border-gray-300 px-5 py-3 text-xs"
                  >
                    Continue shopping
                  </button>

                </div>
              </Modal>
            )}

          </div>,
          document.body
        )}
    </>
  );
}
