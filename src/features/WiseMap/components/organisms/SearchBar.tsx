import { Navbar, NavbarContent } from "@heroui/navbar"
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react"
import * as motion from "motion/react-client"

import SearchSVG from "@/features/WiseMap/assets/icons/SearchSVG.tsx"
import { Input } from "@heroui/input"
import { useQuery } from "@tanstack/react-query"
import { geocodeLocation } from "../../api/geocodeLoc"
import { GeocodeResponse } from "../../api/schemas"
import { Button } from "@heroui/button"

const SearchBar = ({ setLocation }: { setLocation: (coords: any) => void }) => {
  const [topPx, setTopPx] = useState("0")
  const [query, setQuery] = useState("")
  const { data, refetch } = useQuery({
    queryKey: ["geocode"],
    queryFn: () => geocodeLocation(query),
    enabled: false,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim() !== "") {
      refetch()
    }
  }

  useEffect(() => {
    console.log(data)
    if (data) {
      const location = data[0].geometry.location
      setLocation({
        latitude: location.lat,
        longitude: location.lng,
      })
    }
  }, [data])

  return (
    <Navbar
      className=" top-7 relative bg-transparent max-w-none"
      classNames={{
        wrapper: "flex justify-center items-center",
      }}
      isBlurred={false}
    >
      <NavbarContent
        as="section"
        className="absolute flex w-3/6 max-w-xl min-w-[90%]  h-14 bg-white rounded-full shadow-md"
        justify="center"
      >
        <Input
          classNames={{
            base: "h-10 w-10/12 border-0",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-white shadow-none text-left",
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
