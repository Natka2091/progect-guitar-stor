import { useCartStore } from "../store/cartStore";
import { Link } from "react-router";

export function ShoppingCart() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <main className="w-full px-10 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">
            Shopping Cart
        </h1>

        {items.length > 0 && (
            <button
            type="button"
            onClick={clearCart}
            className="mt-6 bg-[#F39800] px-8 py-3 text-xs font-semibold uppercase text-white transition hover:bg-[#D98200]"
            >
            Clear cart
            </button>
        )}
        </div>

      <div className="mb-8 flex items-center gap-3 text-sm text-[#666]">
        <Link
            to="/"
            className="transition hover:text-[#333]"
        >
            Home
        </Link>

        <span>→</span>

        <Link
            to="/catalog"
            className="transition hover:text-[#333]"
        >
            Catalog
        </Link>

        <span>→</span>

        <Link
            to="/shopping-cart"
            className="transition hover:text-[#333]"
        >
            Checkout
        </Link>
        </div>

      {items.length === 0 ? (
        <p className="border-t border-[#E5E5E5] pt-8 text-sm text-[#666]">
          Your cart is empty.
        </p>
      ) : (
        <>
          <section className="border-t border-[#E5E5E5]">
            {items.map((item) => {
              const { product, quantity } = item;

              const itemTotal = product.price * quantity;

              return (
                <article
                  key={product.id}
                  className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-6 border-b border-[#E5E5E5] py-5"
                >
                  <button
                    type="button"
                    onClick={() => removeFromCart(product.id)}
                    className="self-start text-sm text-[#999] transition hover:text-[#333]"
                    aria-label={`Remove ${product.name}`}
                  >
                    ×
                  </button>

                  <div className="flex min-w-0 items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold uppercase text-[#333]">
                        {product.name}
                      </h2>

                      <p className="mt-1 text-xs text-[#666]">
                        Article: {product.article}
                      </p>

                      <p className="text-xs text-[#666]">
                        {product.type}
                        {product.numberOfStrings
                          ? `, ${product.numberOfStrings} strings`
                          : ""}
                      </p>
                    </div>
                  </div>

                  <span className="whitespace-nowrap text-sm text-[#333]">
                    {product.price.toLocaleString("en-US")} €
                  </span>

                  <div className="flex items-center gap-8">
                    <div className="flex items-center border border-[#D5D5D5]">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                        className="flex h-7 w-7 items-center justify-center text-sm text-[#999] hover:bg-[#F5F5F5]"
                      >
                        −
                      </button>

                      <span className="flex h-7 w-7 items-center justify-center border-x border-[#D5D5D5] text-sm">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                        className="flex h-7 w-7 items-center justify-center text-sm text-[#999] hover:bg-[#F5F5F5]"
                      >
                        +
                      </button>
                    </div>

                    <span className="w-20 whitespace-nowrap text-right text-sm font-semibold text-[#333]">
                      {itemTotal.toLocaleString("en-US")} €
                    </span>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="mt-5 grid grid-cols-2 gap-8">

            <div>
              <h2 className="text-sm font-semibold">
                Discount code
              </h2>

              <p className="mt-1 text-xs text-[#666]">
                Enter your promo code, if you have one.
              </p>

              <div className="mt-3 flex gap-4">
                <input
                  type="text"
                  placeholder="GUITARHIT"
                  className="h-9 w-28 border border-[#D5D5D5] px-3 text-xs outline-none"
                />

                <button
                  type="button"
                  disabled
                  className="h-9 bg-[#C7C7C7] px-5 text-xs font-semibold text-white"
                >
                  Apply coupon
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-sm font-semibold">
                Total: {total.toLocaleString("en-US")} €
              </p>

              <button
                type="button"
                className="mt-6 bg-[#F39800] px-8 py-3 text-xs font-semibold uppercase text-white transition hover:bg-[#D98200]"
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}