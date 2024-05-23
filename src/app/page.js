"use client"

import { useState, useEffect } from "react";
import { getCategories } from "@/service/api";
import { ProductCard } from "@/components/productcard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(data => setCategories(data));
  }, []);

  if (categories.length < 1) return <h1 className="flex m-auto justify-center mt-72">Loading...</h1>;

  console.log('categories: ', categories);

  return (
    <>
      <h1 className="text-3xl text-center mt-10">Choose category</h1>
      <div className="w-fit mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-6 justify-items-center">
        {
          categories.map(cat => (
            <Link href={`/category/${cat}`}>
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
  );
}
