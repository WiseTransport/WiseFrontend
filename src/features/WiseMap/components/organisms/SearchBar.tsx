import { KeyboardEvent, useEffect, useState } from "react"
import * as motion from "motion/react-client"

import { useQuery } from "@tanstack/react-query"
import { geocodeLocation } from "../../api/geocodeLoc"
import { Button } from "@heroui/button"
import { CentredInput } from "../atoms/CentredInput"
import MarkerPin from "../../assets/icons/MarkerPin"
import { Navbar } from "@heroui/navbar"
import { useItinerary } from "../../contexts"
import { RoundIconButton } from "@/components/atoms/RoundIconButton"
import MapPointSVG from "../../assets/icons/MapPointSVG"
import { getUserLocation } from "../shared"
import { useMap } from "react-leaflet"
import { LatLngTuple } from "leaflet"
import { InputCoordinates } from "../../api/graphql/graphql"

const SearchBar = ({ setLocation }: { setLocation: (coords: any) => void }) => {
  const [showUserLoc, setShowUserLoc] = useState(false)
  const [userLocLeft, setUserLocLeft] = useState("20rem")
  const [throughUserLoc, setThroughUserLoc] = useState<boolean>()
  const [userLoc, setUserLoc] = useState<InputCoordinates>()
  const [topPx, setTopPx] = useState("0")
  const [fromQuery, setFromQuery] = useState("")
  const [toQuery, setToQuery] = useState("")
  const { setTo, to, from, setFrom } = useItinerary()

  const { data: toData, refetch: toRefetch } = useQuery({
    queryKey: ["toGeocode"],
    queryFn: () => geocodeLocation(toQuery),
    enabled: false,
  })
  const { data: fromData, refetch: fromRefetch } = useQuery({
    queryKey: ["fromGeocode"],
    queryFn: () => geocodeLocation(fromQuery),
    enabled: false,
  })

  const handleFromSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && fromQuery.trim() !== "") {
      setUserLoc(undefined)
      fromRefetch()
    }
  }

  const handleToSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && toQuery.trim() !== "") {
      toRefetch()
    }
  }

  useEffect(() => {
    if (toData && !(fromData || userLoc)) {
      const location = toData[0].geometry.location
      setLocation({
        latitude: location.lat,
        longitude: location.lng,
      })
      setTopPx("4.5rem")

      setUserLocLeft("12rem")
      setShowUserLoc(true)
    } else if (toData && (fromData || userLoc)) {
      const toLoc = toData[0].geometry.location
      setTo({ lat: toLoc.lat, lon: toLoc.lng })

      if (!userLoc && fromData) {
        const fromLoc = fromData[0].geometry.location
        setFrom({ lat: fromLoc.lat, lon: fromLoc.lng })
      } else {
        setFrom(userLoc)
      }
    }
  }, [toData, fromData, userLoc])

  useEffect(() => {
    throughUserLoc && userLoc && setFromQuery(userLoc.lat + " " + userLoc.lon)
  }, [throughUserLoc, userLoc])

  return (
    <Navbar
      className="top-7 relative bg-transparent max-w-none"
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
          endContent={
            <RoundIconButton
              onPress={() => {
                getUserLocation(setUserLoc)
                setThroughUserLoc(true)
              }}
              icon={<MapPointSVG />}
              className="absolute !h-10 translate-x-56 lg:translate-x-96"
            />
          }
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
