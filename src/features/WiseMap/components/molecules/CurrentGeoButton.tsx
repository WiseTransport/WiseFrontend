"use client"

import MapPointSVG from "@/features/WiseMap/assets/icons/MapPointSVG.tsx"
import { RoundIconButton } from "@/components/atoms/RoundIconButton.tsx"
import { getUserLocation } from "../shared"

export default function CurrentGeoButton({ setLocation }: { setLocation: ({}: any) => void }) {
  return (
    <div className="fixed bottom-6 h-24 right-8 z-10">
      {/* <RoundIconButton onPress={() => getUserLocation(setLocation)} icon={<MapPointSVG />} /> */}
    </div>
  )
}
