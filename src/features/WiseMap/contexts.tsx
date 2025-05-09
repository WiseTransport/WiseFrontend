import { createContext, ReactNode, useContext, useState } from "react"
import { BottomPanelControl, CurrentTripData } from "@/features/WiseMap/types.ts"
import { GeocodeGeometry } from "./api/schemas"
import { InputCoordinates, Leg } from "./api/graphql/graphql"

export const BottomPanelControlContext = createContext<BottomPanelControl | null>(null)
export const useBottomPanelControl = () => useContext(BottomPanelControlContext)

export const ItineraryContext = createContext<
  | {
      to: InputCoordinates | undefined
      from: InputCoordinates | undefined
      legs: (Leg | null)[] | undefined
      setTo: (arg: InputCoordinates | undefined) => void
      setFrom: (arg: InputCoordinates | undefined) => void
      setLegs: (arg: (Leg | null)[] | undefined) => void
    }
  | undefined
>(undefined)
export const ItineraryProvider = ({ children }: { children: ReactNode }) => {
  const [to, setTo] = useState<InputCoordinates>()
  const [from, setFrom] = useState<InputCoordinates>()
  const [legs, setLegs] = useState<(Leg | null)[]>()

  return (
    <ItineraryContext.Provider value={{ to, from, legs, setTo, setFrom, setLegs }}>
      {children}
    </ItineraryContext.Provider>
  )
}
export const useItinerary = () => {
  const itinerary = useContext(ItineraryContext)

  if (itinerary == undefined) {
    throw new Error("useItinerary must be used within a ItineraryContext")
  }
  return itinerary
}

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
