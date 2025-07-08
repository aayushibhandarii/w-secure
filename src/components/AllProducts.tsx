import { categories, filterProducts } from "@/lib/utils";
import Category from "./Category";
import Product from "./Product";

export default function AllProducts(
  {search} : {search : string}
){
    const products = filterProducts(search);
    return(
        <div className="flex flex-col gap-5">
      <section className="py-8 bg-product-background rounded-2xl text-black">
        <h2 className="text-2xl font-bold text-center ">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-w-6xl mx-auto">
          {categories.map(category => (
            <Category key={category.id} {...category} />
          ))}
        </div>
      </section>
      <section className="py-8 bg-gray-100 bg-product-background rounded-2xl">
        <h2 className="text-2xl font-bold text-center ">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 max-w-6xl mx-auto">
          {products.length > 0 ? (
            products.map(product => (
              <Product key={product.id} {...product} />
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
      </section>
        </div>
    )
}