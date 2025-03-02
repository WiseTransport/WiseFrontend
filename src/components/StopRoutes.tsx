import { useQuery } from "@tanstack/react-query"
import { getStopsByBbox } from "@/api/getStopsByBbox.ts"
import { Marker, useMapEvent } from "react-leaflet"
import { useState } from "react"
import { GetStopsByBboxQueryVariables } from "@/graphql/graphql.ts"
import { client } from "@/api/shared.ts"
import MarkerClusterGroup from "react-leaflet-markercluster"

export const StopRoutes = () => {
  const [bbox, setBbox] = useState<GetStopsByBboxQueryVariables>()
  const { isPending, isError, data, error } = useQuery(getStopsByBbox(bbox!))

  const map = useMapEvent("moveend", () => {
    const bounds = map.getBounds()
    console.log(bounds.toBBoxString())
    setBbox({
      maxLat: bounds.getNorth(),
      maxLon: bounds.getEast(),
      minLat: bounds.getSouth(),
      minLon: bounds.getWest(),
    })
    client.invalidateQueries({ queryKey: ["stopsByBbox"] })
  })

  if (isPending) {
    console.log("loading...")
    return <p>Loading...</p>
  }

  if (isError) {
    console.log(error)
    return <p>{error.message}</p>
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <MarkerClusterGroup>
      {data.stopsByBbox!.map(
        (stop) =>
          stop != null && <Marker key={stop.gtfsId} position={[stop.lat!, stop.lon!]} />,
      )}
    </MarkerClusterGroup>
  )
}
