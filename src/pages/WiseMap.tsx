import { useState } from "react"

import { WiseMapContainer } from "@/features/WiseMap/components/organisms/WiseMapContainer.tsx"
import BottomPanel from "@/features/WiseMap/components/organisms/BottomPanel.tsx"
import SearchBar from "@/features/WiseMap/components/organisms/SearchBar.tsx"
import SideButtons from "@/features/WiseMap/components/organisms/SideButtons.tsx"
import CurrentGeoButton from "@/features/WiseMap/components/molecules/CurrentGeoButton.tsx"

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

export const WiseMap = () => {
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
      <WiseMapContainer location={location} setLocation={setLocation} />
      <CurrentGeoButton setLocation={setLocation} />
      <BottomPanel />
    </div>
  )
}
