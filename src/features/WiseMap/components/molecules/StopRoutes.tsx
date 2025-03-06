import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Marker, useMapEvents } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-markercluster"

import { getStopsByBbox } from "@/features/WiseMap/api/getStopsByBbox.ts"
import { GetStopsByBboxQueryVariables } from "@/features/WiseMap/api/graphql/graphql.ts"
import { client } from "@/features/WiseMap/api/shared.ts"
import { StopInfoBottomContent } from "@/features/WiseMap/components/molecules/StopInfoBottomContent.tsx"
import { useBottomPanelControl } from "@/features/WiseMap/contexts.ts"
import { stopIcon } from "@/features/WiseMap/assets/leafletIcons.tsx"

const ZOOM_THRESHOLD = 12

export const StopRoutes = () => {
  const bottomPanelControl = useBottomPanelControl()
  const [enabled, setEnabled] = useState<boolean>(true)
  const [bbox, setBbox] = useState<GetStopsByBboxQueryVariables>()

  const { isPending, isError, data, error } = useQuery({
    ...getStopsByBbox(bbox!),
    enabled,
  })

  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds()
      console.log(bounds.toBBoxString())
      setBbox({
        maxLat: bounds.getNorth(),
        maxLon: bounds.getEast(),
        minLat: bounds.getSouth(),
        minLon: bounds.getWest(),
      })
    },
    zoomend: () => {
      console.log(map.getZoom())
      setEnabled(map.getZoom() >= ZOOM_THRESHOLD)
    },
  })

  useEffect(() => {
    client.invalidateQueries({ queryKey: ["stopsByBbox"] }).then()
  }, [bbox])

  if (!enabled) return

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
          stop != null && (
            <Marker
              icon={stopIcon}
              key={stop.gtfsId}
              position={[stop.lat!, stop.lon!]}
              eventHandlers={{
                click: () => {
                  if (!bottomPanelControl) return

                  bottomPanelControl.setBottomPanelContent(
                    <StopInfoBottomContent gtfsId={stop.gtfsId} />,
                  )
                  bottomPanelControl.onOpen()
                },
              }}
            />
          ),
      )}
    </MarkerClusterGroup>
  )
}
