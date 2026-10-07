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

  return (
    <div className="flex items-center justify-between mb-6">

      <div className="flex items-center gap-6">

        <span className="text-[18px] text-[#333]">
          Sort by:
        </span>

        <button
          type="button"
          onClick={() => handleSort("price-asc")}
          className={
            currentSort === "price-asc" || currentSort === "price-desc"
              ? "text-[18px] text-[#333]"
              : "text-[18px] text-[#999]"
          }
        >
          by price
        </button>

        <button
          type="button"
          onClick={() => handleSort("popular")}
          className={
            currentSort === "popular"
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
            onClick={() => handleSort("price-asc")}
        >
            <img
            src={arrowUp}
            alt="Ascending price"
            />
        </button>

        <button
            type="button"
            onClick={() => handleSort("price-desc")}
        >
            <img
            src={arrowDown}
            alt="Descending price"
            />
        </button>
        </div>

    </div>
  );
}