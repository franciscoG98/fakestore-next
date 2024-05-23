"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getCategoryProducts } from "@/service/api";
import { ProductCard } from "@/components/productcard";
import { Searchbar } from "@/components/searchbar";

export default function ProductDetailPage() {

  const pathname = usePathname();
  const slug = pathname.slice(10)

  const [products, setProducts] = useState(null)

  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTouched, setSearchTouched] = useState(false)
  const [isInputEmpty, setIsInputEmpty] = useState(true)

  useEffect(() => {
    if (slug) {
      getCategoryProducts(slug)
        .then(data => setProducts(data))
        .catch(err => conosle.log(err))
    }
  }, [slug]);

  if (!products) return <h1 className="flex m-auto justify-center mt-72">Loading...</h1>;

  const handleSearch = (filtered, inputEmpty) => {
    setFilteredProducts(filtered)
    setSearchTouched(true)
    setIsInputEmpty(inputEmpty)
    inputEmpty && setSearchTouched(false)
  }

  return (
    <main>

      <Searchbar products={products} onSearch={handleSearch} />
      <h1 className="text-2xl text-center mt-4 capitalize">
        <b>
          {
            slug.includes('%')
            ? slug.replace('%20', ' ')  
            : slug
          }
        </b>
      </h1>

      {searchTouched && !isInputEmpty && filteredProducts.length > 0 && (
        <>
          <div className="w-fit mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 justify-items-center my-8">
            {
              filteredProducts?.map(prod => (
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
      )}

      {(!searchTouched || isInputEmpty) && (
        <>
          <div className="w-fit mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-8 justify-items-center my-8">
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
      )}


    </main>
  );
}
