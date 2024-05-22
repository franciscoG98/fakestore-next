"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCategoryProducts } from "@/service/api";
import { ProductCard } from "@/components/productcard";

export default function ProductDetailPage() {

  const pathname = usePathname();
  const slug = pathname.slice(10)

  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (slug) {
      getCategoryProducts(slug).then(data => setProducts(data));
    }
  }, [slug]);

  if (!products) return <h1 className="flex m-auto justify-center mt-72">Loading...</h1>;

  return (
    <main>
      <h1 className="text-2xl text-center mt-4 capitalize">Category <em>{slug}</em></h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center mt-8">
        {
          products?.map(prod => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              image={prod.image}
              rating={prod.rating}
              price={prod.price}
              title={prod.title}
            />
          ))
        }
      </div>
    </main>
  );
}
