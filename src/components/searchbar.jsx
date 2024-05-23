"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { HomeIcon, Search } from "lucide-react"
import Link from "next/link"

export function Searchbar ({ products, onSearch }) {

  const [searchResult, setSearchResult] = useState("")

  const Filter = (e) => {
    const query = e.target.value;
    setSearchResult(query);

    // Si la query esta vacia, pasa todos los productos y pone true el is empty
    if (query.trim() === "") {
      onSearch(products, true)
    } else {
      const filteredProducts = products.filter(prod =>
        prod.title.toLowerCase().includes(query.toLowerCase())
      );
      onSearch(filteredProducts, false)
    }
  }


  return (
    <div className="flex justify-center mt-4 mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Link href="/" className="pr-6 hover:text-green-600">
        <HomeIcon size={40} />
      </Link>
      <Input
        id="search"
        name="search"
        className="py-4 text-gray-600 border-gray-400 focus:ring-0 rounded-e-none"
        placeholder="Type to search"
        type="text"
        onChange={Filter}
        value={searchResult}
      />
      <Button type="button" className="rounded-s-none hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400">
        <Search size={20} />
      </Button>
    </div>
  )
}
