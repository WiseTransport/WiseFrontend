import { useQuery } from "@tanstack/react-query"
import { getVehiclePosition } from "@/features/WiseMap/api/getVehiclePosition.ts"
import { getTripDetails } from "@/features/WiseMap/api/getTripDetails.ts"
import { Polyline } from "react-leaflet"
import { decode } from "@/features/WiseMap/googlePolyline.ts"
import { useCurrentTripData } from "@/features/WiseMap/contexts.tsx"
import { useEffect, useMemo } from "react"
import { Marker } from "@adamscybot/react-leaflet-component-marker"
import { Icon } from "@iconify/react/dist/iconify.js"
import { getIconName } from "../shared"
import { VehicleMarker } from "../atoms/VehicleMarker"

export const TripDisplay = () => {
  const trip = useCurrentTripData()

  const { isPending, isError, data, error, ...tripDetails } = useQuery({
    ...getTripDetails(["tripDetails"], { gtfsId: trip.tripData?.gtfsId! }),
    enabled: !!trip.tripData?.gtfsId,
  })

  const vehicleResult = useQuery({
    ...getVehiclePosition(["vehiclePosition"], { code: data?.trip?.pattern?.code! }),
    enabled: !!data?.trip?.pattern,
  })

  useEffect(() => {
    if (!!trip.tripData?.gtfsId) tripDetails.refetch()
  }, [trip.tripData])

  useEffect(() => {
    if (!!data?.trip?.pattern) vehicleResult.refetch()
  }, [vehicleResult])

  const pattern = useMemo(() => {
    return data?.trip?.pattern ? (
      <Polyline
        positions={decode(data?.trip?.pattern?.patternGeometry?.points)}
        pathOptions={{ color: "#" + trip.tripData?.color, weight: 5 }}
      />
    ) : null
  }, [data, trip.tripData])

  const vehicles = useMemo(() => {
    if (!trip.tripData?.gtfsId) return []

    const positions = vehicleResult.data?.pattern?.vehiclePositions ?? []
    return positions.map((v, i) => (
      <VehicleMarker
        key={v.trip.gtfsId + i}
        gtfsId={v.trip.gtfsId}
        shortName={v.trip.route.shortName!}
        position={{ lat: v.lat!, lng: v.lon! }}
        mode={v.trip.route.mode!}
        color={`#${v.trip.route.color!}`}
        textColor={`#${v.trip.route.textColor!}`}
        heading={v.heading!}
      />
    ))
  }, [vehicleResult, trip.tripData])

  if (tripDetails.isLoading && vehicleResult.isLoading) return <></>

  if (isPending) {
    // console.log("loading tripdata...")
    return <></>
  }

  if (isError) {
    console.log(error)
    return <></>
  }

  return (
    <>
      {pattern}
      {vehicles}
    </>
  )
}
