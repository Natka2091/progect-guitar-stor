import { ProductList } from "../components/ProductList";

export function Catalog() {
  return (
    <main className="mb-[80px] max-w-[1100px] px-6 pt-10 pb-[60px]">
      <h1 className="mb-8 text-3xl font-semibold">
        Guitar Catalog
      </h1>

      <div className="flex gap-10">
        <aside className="hidden w-[180px] shrink-0 lg:block">
          <h2 className="mb-5 font-semibold">
            Filter
          </h2>
        </aside>

        <section className="flex-1">
          <ProductList />
        </section>
      </div>
    </main>
  );
}