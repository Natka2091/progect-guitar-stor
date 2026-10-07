import { ProductList } from "../components/ProductList";
import { Filters } from "../components/Filters";
import { Sort } from "../components/Sort";

export function Catalog() {
  return (
    <main className="flex-grow mx-auto max-w-7*1 px-6 pt-10 pb-15">

      <div className="flex gap-10">

        <aside className="hidden shrink-0 lg:block">
          <Filters />
        </aside>

        <section className="min-w-0 flex-1">
          <Sort />
          <ProductList />
        </section>

      </div>
    </main>
  );
}