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
import { MapPointSVG } from "../../assets/icons/MapPointSVG"
import { getUserLocation } from "../shared"
import { InputCoordinates } from "../../api/graphql/graphql"

const SearchBar = ({ setLocation }: { setLocation: (coords: any) => void }) => {
  const [throughUserLoc, setThroughUserLoc] = useState<boolean>()
  const [userLoc, setUserLoc] = useState<InputCoordinates>()
  const [topPx, setTopPx] = useState("0")
  const [fromQuery, setFromQuery] = useState("")
  const [toQuery, setToQuery] = useState("")
  const [isInvalid, setIsInvalid] = useState(false)
  const { setTo, to, from, setFrom, setLegs } = useItinerary()

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

  const handleFromGeocode = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && fromQuery.trim() !== "") {
      fromRefetch()
    }
  }

  const handleToGeocode = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && toQuery.trim() !== "") {
      toRefetch()
      setTopPx("4.5rem")
    }
  }

  useEffect(() => {
    if (fromQuery.trim() === "" || toQuery.trim() === "") return
    if (fromData?.length === 0 || toData?.length === 0) {
      setIsInvalid(true)

      return
    }
    if (toData && (fromData || userLoc)) {
      const toLoc = toData[0].geometry.location
      setTo({ lat: toLoc.lat, lon: toLoc.lng })

      if (userLoc) {
        setFrom(userLoc)
      } else if (fromData) {
        const fromLoc = fromData[0].geometry.location
        setFrom({ lat: fromLoc.lat, lon: fromLoc.lng })
      }

      setUserLoc(undefined)
      setIsInvalid(false)
      setFromQuery("")
      setTopPx("0")
    }
  }, [toData, fromData, userLoc])

  useEffect(() => {
    if (fromData?.length === 0 || toData?.length === 0) {
      setIsInvalid(true)
      return
    }
    if (toData && !(fromData || userLoc)) {
      const location = toData[0].geometry.location
      setLocation({
        latitude: location.lat,
        longitude: location.lng,
      })
      setIsInvalid(false)
    }
  }, [toData])

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
          isInvalid={isInvalid}
          placeholder="Откъде ще пътувате?"
          startContent={
            <div className="w-8 pr-2">
              <MarkerPin />
            </div>
          }
          onKeyUp={handleFromGeocode}
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
          isInvalid={isInvalid}
          placeholder="Търси дестинация"
          startContent={
            <div className="w-8 pr-2">
              <MarkerPin />
            </div>
          }
          onKeyUp={handleToGeocode}
          query={toQuery}
          setQuery={setToQuery}
        />{" "}
      </motion.div>
    </Navbar>
  )
}

export default SearchBar
