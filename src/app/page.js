"use client"

import { useState, useEffect } from "react";
import { getAllProducts } from "@/service/api";
import { ProductCard } from "@/components/productcard";

export default function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center mt-8">
      {
        products?.map(prod => (
          <ProductCard
            key={prod.id}
            category={prod.category}
            description={prod.description}
            image={prod.image}
            rating={prod.rating}
            price={prod.price}
            title={prod.title}
          />
        ))
      }
    </div>
  );
}
