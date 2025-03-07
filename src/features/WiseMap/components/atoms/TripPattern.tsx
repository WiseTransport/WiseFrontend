import { useQuery } from "@tanstack/react-query"
import { getTripDetails } from "@/features/WiseMap/api/getTripDetails.ts"
import { getVehiclePosition } from "@/features/WiseMap/api/getVehiclePosition.ts"
import { Polyline } from "react-leaflet"

export const TripPattern = ({ code }: { code: string }) => {
  const { isPending, isError, data, error } = useQuery(getVehiclePosition({code}))

  if (isPending) {
    console.log("loading...")
    // addToast({ title: "Loading stoptimes..." })
    return <></>
  }

  if (isError) {
    console.log(error)
    // addToast({ title: "Error!", description: error.message })
    return <></>
  }

}
