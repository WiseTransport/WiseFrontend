import { Navbar, NavbarContent } from "@heroui/navbar"
import { ChangeEvent, KeyboardEvent, useState } from "react"

import SearchSVG from "@/features/WiseMap/assets/icons/SearchSVG.tsx"
import { Input } from "@heroui/input"
import { searchLocation } from "@/features/WiseMap/api/searchLocation.ts"

const SearchBar = ({ setLocation }: { setLocation: (coords: any) => void }) => {
  const [query, setQuery] = useState("")

  const handleSearch = async (query: string) => {
    const result = await searchLocation(query)

    if (result) setLocation(result)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      handleSearch(query)
    }
  }

  return (
    <Navbar className="top-7 relative bg-transparent max-w-none" isBlurred={false}>
      <NavbarContent
        as="section"
        className="flex mx-auto w-3/6 max-w-xl max-sm:w-full h-14 bg-white rounded-full shadow-md"
        justify="center"
      >
        <Input
          classNames={{
            base: "h-10 w-10/12 border-0",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-white shadow-none text-left",
          }}
          placeholder="Търси дестинация"
          startContent={
            <div className="w-8 pr-2">
              <SearchSVG />
            </div>
          }
          type="search"
          value={query}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
        />
      </NavbarContent>
    </Navbar>
  )
}

export default SearchBar
