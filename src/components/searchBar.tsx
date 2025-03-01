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
    <Navbar className="top-10 relative bg-transparent" isBlurred={false}>
      <NavbarContent
        as="div"
        className="flex mx-auto w-11/12 h-14 bg-white rounded-full max-w-sm shadow-md"
        justify="center"
      >
        <Input
          classNames={{
            base: "h-10 w-10/12 border-0",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-white shadow-none text-left pl-2",
          }}
          placeholder="Търси дестинация"
          size="sm"
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
