"use client"

import { useState, useEffect } from "react";
import { getAllProducts } from "@/service/api";
import { ProductCard } from "@/components/productcard";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => setProducts(data));
  }, []);

  if (products.length < 1) return <h1 className="flex m-auto justify-center mt-72">Loading...</h1>;

  return (
    <>
      <h1 className="text-center font-semibold text-2xl mt-8">All products</h1>
      <div className="w-fit mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 my-8">
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
    </>
  );
}
