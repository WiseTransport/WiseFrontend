import { useQuery } from "@tanstack/react-query"
import { getVehiclePosition } from "@/features/WiseMap/api/getVehiclePosition.ts"
import { getTripDetails } from "@/features/WiseMap/api/getTripDetails.ts"
import { Marker, Polyline } from "react-leaflet"
import { decode } from "@/features/WiseMap/googlePolyline.ts"
import { useCurrentTripData } from "@/features/WiseMap/contexts.tsx"
import { greenIcon } from "@/features/WiseMap/assets/leafletIcons.tsx"
import { useEffect, useMemo } from "react"

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

    return positions.map((v) => (
      <Marker key={v.trip.gtfsId} icon={greenIcon} position={{ lat: v.lat!, lng: v.lon! }} />
    ))
  }, [vehicleResult, trip.tripData])

  if (tripDetails.isLoading && vehicleResult.isLoading) return <></>

  if (isPending) {
    console.log("loading tripdata...")
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
