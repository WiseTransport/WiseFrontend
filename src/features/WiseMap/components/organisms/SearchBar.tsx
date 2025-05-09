import { KeyboardEvent, useEffect, useState } from "react"
import * as motion from "motion/react-client"

import { useQuery } from "@tanstack/react-query"
import { geocodeLocation } from "../../api/geocodeLoc"
import { Button } from "@heroui/button"
import { CentredInput } from "../atoms/CentredInput"
import MarkerPin from "../../assets/icons/MarkerPin"
import { Navbar } from "@heroui/navbar"
import { useItinerary } from "../../contexts"

const SearchBar = ({ setLocation }: { setLocation: (coords: any) => void }) => {
  const [topPx, setTopPx] = useState("0")
  const [fromQuery, setFromQuery] = useState("")
  const [toQuery, setToQuery] = useState("")
  const { setTo, setFrom } = useItinerary()

  const { data: toData, refetch: toRefetch } = useQuery({
    queryKey: ["toGeocode"],
    queryFn: () => geocodeLocation(toQuery),
    enabled: false,
  })
  const { data: fromData, refetch: fromRefetch } = useQuery({
    queryKey: ["fromGgeocode"],
    queryFn: () => geocodeLocation(fromQuery),
    enabled: false,
  })

  const handleFromSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && fromQuery.trim() !== "") {
      fromRefetch()
    }
  }

  const handleToSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && toQuery.trim() !== "") {
      toRefetch()
    }
  }

  useEffect(() => {
    if (toData && !fromData) {
      const location = toData[0].geometry.location
      setLocation({
        latitude: location.lat,
        longitude: location.lng,
      })
      setTopPx("4.5rem")
    } else if (toData && fromData) {
      const toLoc = toData[0].geometry.location
      const fromLoc = fromData[0].geometry.location
      setTo({ lat: toLoc.lat, lon: toLoc.lng })
      setFrom({ lat: fromLoc.lat, lon: fromLoc.lng })
    }
  }, [toData, fromData])

  return (
    <Navbar
      className=" top-7 relative bg-transparent max-w-none"
      classNames={{
        wrapper: "flex justify-center items-center",
      }}
      isBlurred={false}
    >
      <div className="absolute w-full">
        <CentredInput
          placeholder="Откъде ще пътувате?"
          startContent={
            <div className="w-8 pr-2">
              <MarkerPin />
            </div>
          }
          onKeyUp={handleFromSearch}
          query={fromQuery}
          setQuery={setFromQuery}
        />
      </div>

      <motion.div animate={{ top: topPx }} className="absolute w-full">
        <CentredInput
          placeholder="Търси дестинация"
          startContent={
            <div className="w-8 pr-2">
              <MarkerPin />
            </div>
          }
          onKeyUp={handleToSearch}
          query={toQuery}
          setQuery={setToQuery}
        />{" "}
      </motion.div>
    </Navbar>
  )
}

export default SearchBar
