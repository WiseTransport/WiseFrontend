import { useQuery } from "@tanstack/react-query"
import { getVehiclePosition } from "@/features/WiseMap/api/getVehiclePosition.ts"
import { getTripDetails } from "@/features/WiseMap/api/getTripDetails.ts"
import { Marker, Polyline } from "react-leaflet"
import { decode } from "@/features/WiseMap/googlePolyline.ts"
import { useCurrentTripData } from "@/features/WiseMap/contexts.tsx"
import { greenIcon } from "@/features/WiseMap/assets/leafletIcons.tsx"
import { useEffect, useMemo } from "react"
import { client } from "../../api/shared"

export const TripDisplay = () => {
  const trip = useCurrentTripData()

  const { isPending, isError, data, error } = useQuery({
    ...getTripDetails(["tripDetails"], { gtfsId: trip.tripData?.gtfsId! }),
    enabled: !!trip.tripData,
  })
  const vehicleResult = useQuery({
    ...getVehiclePosition(["vehiclePosition"], { code: data?.trip?.pattern?.code! }),
    enabled: !!data?.trip?.pattern,
  })

  useEffect(() => {
    client.invalidateQueries({ queryKey: ["tripDetails"] }).then()
    client.invalidateQueries({ queryKey: ["vehiclePosition"] }).then()
  }, [trip])

  const vehicles = useMemo(() => {
    const positions = vehicleResult.data?.pattern?.vehiclePositions ?? []

    return positions
      .filter((v) => v.trip.gtfsId === trip.tripData?.gtfsId)
      .map((v) => (
        <Marker key={v.trip.gtfsId} icon={greenIcon} position={{ lat: v.lat!, lng: v.lon! }} />
      ))
  }, [vehicleResult, trip.tripData])

  const pattern = useMemo(() => {
    return data?.trip?.pattern ? (
      <Polyline
        positions={decode(data?.trip?.pattern?.patternGeometry?.points)}
        pathOptions={{ color: "#" + trip.tripData?.color, weight: 5 }}
      />
    ) : (
      <></>
    )
  }, [trip.tripData, data])

  if (!trip) return <></>

  if (isPending) {
    console.log("loading tripdata...")
    return <></>
  }

  if (isError) {
    console.log(error)
    return <></>
  }

  // console.log(trip.tripData)
  // console.log(data?.trip)
  // console.log(pattern)
  // console.log(vehicles)

  return (
    <>
      {/*{console.log(trip.tripData)}*/}
      {/*{console.log("tripdata",data?.trip)}*/}
      {/*{console.log("vehi", vehicleResult.data)}*/}
      {/*{console.log(!!data?.trip?.pattern?.code)}*/}
      {/*{console.log(decode(data?.trip?.pattern?.patternGeometry?.points))}*/}
      {/*{console.log("#" + trip.tripData?.color)}*/}
      {pattern}
      {vehicles}
    </>
  )
}
