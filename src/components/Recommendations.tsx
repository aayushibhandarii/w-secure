import { filterProducts } from "@/lib/utils";
import Product from "./Product";

export default function Recommendations(
    { search } : {
        search : string }) {
  // Simulated ML-based recommendations (top 2 products for demo)
  const products = filterProducts(search);
  const recommendedProducts = products.slice(0, 2);

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-w-6xl mx-auto">
        {recommendedProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}