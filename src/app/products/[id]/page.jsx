"use client"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getSingleProduct, getAllProducts } from "@/service/api";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react"
import { Searchbar } from "@/components/searchbar";
import { ProductCard } from "@/components/productcard";
import Image from "next/image"

export default function ProductDetailPage() {

  const pathname = usePathname();
  const id = pathname.slice(10)

  const [product, setProduct] = useState(null);

  const [allProducts, setAllProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTouched, setSearchTouched] = useState(false)
  const [isInputEmpty, setIsInputEmpty] = useState(true)

  useEffect(() => {
    if (id) {
      getSingleProduct(id)
        .then(data => setProduct(data))
        .catch(err => console.log(err))
    }

    getAllProducts()
      .then(data => setAllProducts(data))
      .catch(err => console.log(err))

  }, [id]);

  if (!product) return <h1 className="flex m-auto justify-center mt-72">Loading...</h1>;

  const { title, description, image, category, rating, price } = product;

  const stars = [];
  for (let i = 0; i < Math.floor(rating.rate); i++) {
    stars.push(<Star key={i} fill="yellow" />);
  }

  const handleSearch = (filtered, inputEmpty) => {
    setFilteredProducts(filtered)
    setSearchTouched(true)
    setIsInputEmpty(inputEmpty)
    inputEmpty && setSearchTouched(false)
  }

  return (
    <>
      <Searchbar products={allProducts} onSearch={handleSearch} />

      {searchTouched && !isInputEmpty && filteredProducts.length > 0 && (
        <div className="w-fit mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8 my-8">
          {filteredProducts.map(prod => (
            <ProductCard
              key={prod.id}
              id={prod.id}
              image={prod.image}
              rating={prod.rating}
              price={prod.price}
              title={prod.title}
            />
          ))}
        </div>
      )}

      {(!searchTouched || isInputEmpty) && (
        <div className="flex flex-col items-center  md:flex-row justify-center my-16 md:mt-32">
          <Image
            src={image}
            alt={title}
            width={288}
          />
          <section className="w-80 flex flex-col justify-between ml-8">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">{title}</h1>
              <b className="uppercase pt-4">{category}</b>
            </div>
            <p>{description}</p>
            <div className="bg-red- flex justify-around font-extrabold">
              <span className="mt-4">$ {price}</span>
              <span className="gap-3 text-center">
                {rating.rate}
                <div className="flex">
                  {stars}
                  {/* Estrella parcial */}
                  {rating.rate % 1 !== 0 && <Star fill="yellow" style={{ clipPath: 'inset(0 50% 0 0)' }} />}
                </div>
              </span>
            </div>
            <Button className="w-fit px-8 text-md mx-auto mt-8 text-white bg-green-600 hover:bg-blue-600 hover:text-white" variant='outline'>Buy</Button>
          </section>
        </div>
      )}
    </>
  );
}
