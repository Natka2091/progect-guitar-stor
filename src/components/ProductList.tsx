import { useSearchParams } from "react-router";
import { productCards } from "../data";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";

const PRODUCTS_PER_PAGE = 6;

export function ProductList() {
  const [searchParams] = useSearchParams();

  const currentPage =
    Number(searchParams.get("page")) || 1;

  const totalPages = Math.ceil(
    productCards.length / PRODUCTS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = productCards.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
}