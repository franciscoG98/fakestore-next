import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function ProductCard({ id, rating, image, price, title }) {

  const maxTitleLength = 20

  const truncateTitle = (title) => {
    return title.length > maxTitleLength ? `${title.substring(0, maxTitleLength)}...` : title;
  }

  return (
    <Card className="w-72 flex flex-col justify-between border-gray-500">
      <CardHeader className="h-28 justify-center text-center rounded-t-lg border-b-2 border-gray-500">
        <CardTitle>
          {truncateTitle(title)}
        </CardTitle>
      </CardHeader>
      <img
        src={image}
        alt={title}
        className="w-72 h-64"
      />
      <CardFooter className="font-bold flex flex-col">
        <section className="w-full flex justify-between mt-4">
          <span>$ {price}</span>
          <p className="flex gap-2">
            <span>{rating.rate}</span>
            <Star className="text-yellow-400" fill="yellow" />
          </p>
        </section>
        <Link href={`/products/${id}`} className="pr-6 text-green-600 hover:text-blue-600">
          <Button className="w-fit px-8 text-md text-white mx-auto mt-4 bg-green-600  hover:text-white hover:bg-blue-600" variant='outline'>See Product</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
