"use client"

import { useState, useEffect } from "react"
import { getCategories, getAllProducts } from "@/service/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Searchbar } from "@/components/searchbar"
import { ProductCard } from "@/components/productcard"

export default function Home() {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchTouched, setSearchTouched] = useState(false)
  const [isInputEmpty, setIsInputEmpty] = useState(true)

  useEffect(() => {
    getCategories()
      .then(res => setCategories(res))
      .catch(error => console.log(error))

    getAllProducts()
      .then(res => setProducts(res))
      .catch(error => console.log(error))
  }, [])

  if (categories.length < 1) return <h1 className="flex m-auto justify-center mt-72">Loading...</h1>

  const handleSearch = (filtered, inputEmpty) => {
    setFilteredProducts(filtered)
    setSearchTouched(true)
    setIsInputEmpty(inputEmpty)
    inputEmpty && setSearchTouched(false)
  }

  return (
    <>
      <Searchbar products={products} onSearch={handleSearch} />

      {searchTouched && !isInputEmpty && filteredProducts.length > 0 && (
        <div className="w-fit mx-auto grid gap-8 my-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
        <>
          <h1 className="text-3xl text-center mt-10">Choose category</h1>
          <div className="w-fit mx-auto md:grid md:grid-cols-2 gap-8 mt-6 justify-items-center">
            {
              categories.map((cat, idx) => (
                <Link href={`/category/${cat}`} key={idx} className="flex flex-col mb-6 md:mb-0">
                  <Card className="w-72 hover:bg-green-400 hover:duration-700 border-gray-500">
                    <CardHeader>
                      <CardTitle className="capitalize whitespace-nowrap text-center py-8">
                        {cat}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>See products in this category</CardContent>
                  </Card>
                </Link>
              ))
            }
            <Link href={'/products'} className="col-span-2">
              <Card className="grid w-72 hover:bg-green-400 hover:duration-700 border-gray-500">
                <CardHeader>
                  <CardTitle className="capitalize whitespace-nowrap text-center py-8">
                    All Products
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </>
      )}
    </>
  )
}
