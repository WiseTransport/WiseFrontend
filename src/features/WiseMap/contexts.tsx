import { createContext, ReactNode, useContext, useState } from "react"
import { BottomPanelControl, CurrentTripData } from "@/features/WiseMap/types.ts"
import { GeocodeGeometry } from "./api/schemas"
import { InputCoordinates } from "./api/graphql/graphql"

export const BottomPanelControlContext = createContext<BottomPanelControl | null>(null)
export const useBottomPanelControl = () => useContext(BottomPanelControlContext)

export const ToFromContext = createContext<
  | {
      to: InputCoordinates | undefined
      from: InputCoordinates | undefined
      setTo: (arg: InputCoordinates | undefined) => void
      setFrom: (arg: InputCoordinates | undefined) => void
    }
  | undefined
>(undefined)
export const ToFromProvider = ({ children }: { children: ReactNode }) => {
  const [to, setTo] = useState<InputCoordinates>()
  const [from, setFrom] = useState<InputCoordinates>()

  return (
    <ToFromContext.Provider value={{ to, from, setTo, setFrom }}>{children}</ToFromContext.Provider>
  )
}
export const useToFrom = () => {
  const toFrom = useContext(ToFromContext)

  if (toFrom === undefined) {
    throw new Error("useToFrom must be used within a ToFromContext")
  }
  return toFrom
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
