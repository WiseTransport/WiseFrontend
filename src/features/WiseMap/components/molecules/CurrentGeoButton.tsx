"use client"

import MapPointSVG from "@/features/WiseMap/static/icons/MapPointSVG.tsx"
import { RoundIconButton } from "@/components/atoms/RoundIconButton.tsx"

export default function CurrentGeoButton({
  setLocation,
}: {
  setLocation: ({}: any) => void
}) {
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          console.log(latitude, longitude)
          setLocation({ latitude, longitude })
        },

        (error) => {
          console.error("Error get user location: ", error)
        },
      )
    } else {
      console.log("Geolocation is not supported be this browser")
    }
  }

  return (
    <div className="fixed bottom-6 h-24 right-8 z-10">
      <RoundIconButton onPress={getUserLocation} icon={<MapPointSVG />} />
    </div>
  )
}
