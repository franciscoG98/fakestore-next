import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "./ui/button"

export function ProductCard({ description, rating, image, price, title}) {

  return (
    <Card className="w-72 flex flex-col justify-between">
      <div>
      <CardHeader className="bg-white text-black h-36 justify-center rounded-t-lg">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <img
        src={image}
        alt={title}
        className="w-72 h-64 border-t"
      />
      <CardContent className="mt-4">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      </div>
      <CardFooter className="font-bold text-white flex flex-col">
        <Button className="w-fit px-8 text-md mx-auto my-4 bg-green-600" variant='outline'>Buy</Button>
        <section className="w-full flex justify-between">
          <span>$ {price}</span>
          <p className="r-0 flex">
            <span>{rating.rate}</span>
            <Star fill="yellow" />
          </p>
        </section>
      </CardFooter>
    </Card>
  )
}
