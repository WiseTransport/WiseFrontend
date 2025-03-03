import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Marker, useMapEvent } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-markercluster"

import { getStopsByBbox } from "@/features/WiseMap/api/getStopsByBbox.ts"
import { GetStopsByBboxQueryVariables } from "@/features/WiseMap/api/graphql/graphql.ts"
import { client } from "@/features/WiseMap/api/shared.ts"

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
