import { Navbar, NavbarContent, Input } from "@heroui/react"
import { KeyboardEvent, ChangeEvent, useState } from "react"

import SearchSVG from "@/svg/SearchSVG"

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      onSearch(query)
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
          startContent={<div className="w-8 pr-2"><SearchSVG /></div>}
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
