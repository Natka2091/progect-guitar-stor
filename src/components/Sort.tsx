import { useSearchParams } from "react-router";
import arrowUp from "../assets/icons/icon_arrow-up.svg";
import arrowDown from "../assets/icons/icon_arrow-down.svg";

export function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "price-asc";

  const handleSort = (sort: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", sort);
    params.set("page", "1");

    setSearchParams(params);
  };

  const handlePriceSort = () => {
    const nextSort = currentSort === "price-asc" ? "price-desc" : "price-asc";

    handleSort(nextSort);
  };

  const handlePopularitySort = () => {
    const nextSort = currentSort === "popular-desc" ? "popular-asc" : "popular-desc";

    handleSort(nextSort);
  };

  const isPriceSort = currentSort === "price-asc" || currentSort === "price-desc";

  const isPopularitySort = currentSort === "popular-asc" || currentSort === "popular-desc";

  return (
    <div className="mt-2 mb-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="text-[18px] text-[#333]">
          Sort by:
        </span>

        <button
          type="button"
          onClick={handlePriceSort}
          className={
            isPriceSort
              ? "text-[18px] text-[#333]"
              : "text-[18px] text-[#999]"
          }
        >
          by price
        </button>

        <button
          type="button"
          onClick={handlePopularitySort}
          className={
            isPopularitySort
              ? "text-[18px] text-[#333]"
              : "text-[18px] text-[#999]"
          }
        >
          by popularity
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => handleSort(isPriceSort ? "price-asc" : "popular-asc")}
          aria-label="Sort ascending"
        >
          <img src={arrowUp} alt="" />
        </button>

        <button
          type="button"
          onClick={() => handleSort(isPriceSort ? "price-desc" : "popular-desc")}
          aria-label="Sort descending"
        >
          <img src={arrowDown} alt="" />
        </button>
      </div>
    </div>
  );
}
