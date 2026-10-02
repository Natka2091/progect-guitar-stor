import { ProductList } from "../components/ProductList";
import { Filters } from "../components/Filters";

export function Catalog() {
  return (
    <main className="flex-grow mx-auto max-w-[1280px] px-6 pt-10 pb-[60px]">
      <h1 className="mb-8 text-3xl font-semibold">
        Guitar Catalog
      </h1>

      <div className="flex gap-10">

        <aside className="hidden shrink-0 lg:block">
          <Filters />
        </aside>

        <section className="min-w-0 flex-1">
          <ProductList />
        </section>

      </div>
    </main>
  );
}