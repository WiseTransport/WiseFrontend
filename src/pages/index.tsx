import { useState } from "react"

import { WiseMap } from "@/components/WiseMap.tsx"
import BottomPanel from "@/components/BottomPanel"
import SearchBar from "@/components/SearchBar"
import SideButtons from "@/components/SideButtons.tsx"
import CurrentGeoButton from "@/components/CurrentGeoButton.tsx"

const searchLocation = async (query: string) => {
  if (!query) return

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
  )

  const data = await response.json()

  if (data.length > 0) {
    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    }
  }

  return null
}

export default function IndexPage() {
  const [location, setLocation] = useState({
    latitude: 47.4572276012875,
    longitude: 18.956050837881712,
  })

  const handleSearch = async (query: string) => {
    const result = await searchLocation(query)

    if (result) setLocation(result)
  }

  return (
    <div className="h-full w-full">
      <SearchBar onSearch={handleSearch} />
      <SideButtons />
      <WiseMap location={location} setLocation={setLocation} />
      <CurrentGeoButton setLocation={setLocation} />
      <BottomPanel />
    </div>
  )
}
