import { createContext, ReactNode, useContext, useState } from "react"
import { BottomPanelControl, CurrentTripData } from "@/features/WiseMap/types.ts"

export const BottomPanelControlContext = createContext<BottomPanelControl | null>(null)
export const useBottomPanelControl = () => useContext(BottomPanelControlContext)

export const CurrentTripContext = createContext<
  | {
      setTripData: (arg: CurrentTripData | undefined) => void
      tripData: CurrentTripData | undefined
    }
  | undefined
>(undefined)
export const TripDataProvider = ({ children }: { children: ReactNode }) => {
  const [currentTripData, setCurrentTripData] = useState<CurrentTripData>()

  return (
    <CurrentTripContext.Provider
      value={{
        setTripData: setCurrentTripData,
        tripData: currentTripData,
      }}
    >
      {children}
    </CurrentTripContext.Provider>
  )
}
export const useCurrentTripData = () => {
  const currentTrip = useContext(CurrentTripContext)

  if (currentTrip === undefined) {
    throw new Error("useCurrentTripData must be used within a CurrentTripContext")
  }
  return currentTrip
}
