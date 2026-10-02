import { useSearchParams } from "react-router";
import { productCards } from "../data";
import { ProductCard } from "./ProductCard";
import { Pagination } from "./Pagination";

const PRODUCTS_PER_PAGE = 9;

export function ProductList() {
  const [searchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const selectedTypes = searchParams.getAll("type");
  const selectedStrings = searchParams.getAll("strings").map(Number);
  const minPrice = Number(searchParams.get("minPrice")) || 0;
  const maxPrice = Number(searchParams.get("maxPrice")) || Infinity;

  const filteredGuitarList =
    productCards.filter((product) => {
      const matchesType =
        selectedTypes.length === 0 ||
        selectedTypes.includes(product.type);

      const matchesStrings =
        selectedStrings.length === 0 ||
        selectedStrings.includes(product.numberOfStrings);

      const matchesPrice =
        product.price >= minPrice &&
        product.price <= maxPrice;

      return (
        matchesType &&
        matchesStrings &&
        matchesPrice
      );
    });

  const totalPages = Math.ceil(filteredGuitarList.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const currentProducts = filteredGuitarList.slice(
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