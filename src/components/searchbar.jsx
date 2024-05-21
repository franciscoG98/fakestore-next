import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { Search } from "lucide-react"

export function Searchbar () {
  return (
    <div className="flex justify-center mt-4 mx-auto w-1/3">
      <Input
        id="search"
        name="search"
        className="py-4 text-gray-600 border-gray-400 focus:ring-0 rounded-e-none"
        placeholder="Type the product you are looking for..."
        type="text"
      />
      <Button type="button" className="rounded-s-none hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400">
        <Search size={20} />
      </Button>
    </div>
  )
}
