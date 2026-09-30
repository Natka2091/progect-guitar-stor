import { Link } from "react-router";

export function Home() {
  return (
    <main className="mx-auto mb-[80px] max-w-[1100px] px-6 py-20 text-center">
      <h1 className="text-4xl font-semibold">
        Find Your Perfect Guitar
      </h1>

      <p className="mx-auto mt-4 max-w-[600px] text-gray-600">
        Discover guitars and musical instruments for every style and level.
      </p>

      <Link
        to="/catalog"
        className="mt-8 inline-block bg-[#F39800] px-8 py-3 text-sm font-medium text-white hover:bg-[#D98200]"
      >
        View Catalog
      </Link>
    </main>
  );
}