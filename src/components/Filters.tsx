import { useState } from "react";
import { useSearchParams } from "react-router";

const typeLabels = {
  guitalele: "Guitalele",
  ukulele: "Ukulele",
  banjo: "Banjo",
  "electric-guitar": "Electric guitars",
  "hollow-body": "Hollow-body guitars",
  bass: "Bass guitars",
  resonator: "Resonator guitars",
  "acoustic-electric": "Acoustic-electric guitars",
} as const;

const productTypes = Object.keys(typeLabels);

const stringOptions = [4, 5, 6];

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [minPrice, setMinPrice] = useState(
    searchParams.get("minPrice") || ""
  );

  const [maxPrice, setMaxPrice] = useState(
    searchParams.get("maxPrice") || ""
  );

  const [selectedTypes, setSelectedTypes] = useState<string[]>(
      searchParams.getAll("type")
    );

  const [selectedStrings, setSelectedStrings] = useState<number[]>(
      searchParams
        .getAll("strings")
        .map(Number)
    );

  const handleTypeChange = (type: string) => {
    setSelectedTypes((current) =>
      current.includes(type)
        ? current.filter((item) => item !== type)
        : [...current, type]
    );
  };

  const handleStringsChange = (strings: number) => {
    setSelectedStrings((current) =>
      current.includes(strings)
        ? current.filter((item) => item !== strings)
        : [...current, strings]
    );
  };

  const handleApplyFilters = () => {
    const newParams = new URLSearchParams();

    if (minPrice) {
      newParams.set("minPrice", minPrice);
    }

    if (maxPrice) {
      newParams.set("maxPrice", maxPrice);
    }

    selectedTypes.forEach((type) => {
      newParams.append("type", type);
    });

    selectedStrings.forEach((strings) => {
      newParams.append( "strings", strings.toString());
    });

    newParams.set("page", "1");

    setSearchParams(newParams);
  };

  return (
    <aside>

      <h2 className="mb-5 text-[24px] font-semibold">
        Filter
      </h2>

      <section className="border-t border-[#E5E5E5] pt-9">
        <h3 className="mb-7 text-[24px] font-semibold">
          Price, €
        </h3>

        <div className="flex items-center gap-4">
          <input
            type="number"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
            placeholder="0"
            className="h-9.5 w-27.5 border border-[#BDBDBD] px-3 text-center text-[16px] outline-none"
          />

          <span className="text-[24px] text-[#777]">
            —
          </span>

          <input
            type="number"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            placeholder="10 000"
            className="h-9.5 w-27.5 border border-[#BDBDBD] px-3 text-center text-[16px] outline-none"
          />
        </div>
      </section>

      <section className="mt-9 border-t border-[#E5E5E5] pt-9">
        <h3 className="mb-6 text-[24px] font-semibold">
          Guitar type
        </h3>

        <div className="space-y-4">
          {productTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-5 text-[18px]"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="h-8 w-8 shrink-0 appearance-none border border-[#BDBDBD] checked:bg-[#777] checked:after:block checked:after:text-center checked:after:text-[20px] checked:after:leading-7.5 checked:after:text-white checked:after:content-['✓']"
              />

              <span>
                {typeLabels[type as keyof typeof typeLabels]}
              </span>
            </label>
          ))}
        </div>
      </section>

      <section className="mt-9 border-t border-[#E5E5E5] pt-9">
        <h3 className="mb-6 text-[24px] font-semibold">
          Number of strings
        </h3>

        <div className="space-y-4">
          {stringOptions.map((strings) => (
            <label
              key={strings}
              className="flex cursor-pointer items-center gap-5 text-[18px]"
            >
              <input
                type="checkbox"
                checked={selectedStrings.includes(strings)}
                onChange={() => handleStringsChange(strings)}
                className="h-8 w-8 shrink-0 appearance-none border border-[#BDBDBD] checked:bg-[#777] checked:after:block checked:after:text-center checked:after:text-[20px] checked:after:leading-7.5 checked:after:text-white checked:after:content-['✓']"
              />

              <span>{strings}</span>
            </label>
          ))}
        </div>
      </section>

      <button
        type="button"
        onClick={handleApplyFilters}
        className="mt-12 h-10 w-39.25 bg-[#BDBDBD] text-[14px] font-semibold uppercase text-white transition hover:bg-[#999]"
      >
        Show
      </button>

    </aside>
  );
}