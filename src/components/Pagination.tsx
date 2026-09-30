import { useSearchParams } from "react-router";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const goToPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);

    newParams.set("page", page.toString());

    setSearchParams(newParams, { replace: true });
  };

  return (
    <nav className="mt-10 flex justify-end gap-2" aria-label="Pagination">
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="border border-[#D9D9D9] px-3 py-1 disabled:opacity-40"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => goToPage(page)}
            className={
              currentPage === page
                ? "bg-[#4A4A4A] px-3 py-1 text-white"
                : "border border-[#D9D9D9] px-3 py-1"
            }
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border border-[#D9D9D9] px-3 py-1 disabled:opacity-40"
      >
        →
      </button>
    </nav>
  );
}