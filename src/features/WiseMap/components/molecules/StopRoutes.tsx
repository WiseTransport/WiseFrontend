import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Marker, useMapEvents } from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-markercluster"

import { getStopsByBbox } from "@/features/WiseMap/api/getStopsByBbox.ts"
import { GetStopsByBboxQueryVariables } from "@/features/WiseMap/api/graphql/graphql.ts"
import { client } from "@/features/WiseMap/api/shared.ts"
import { StopInfoBottomContent } from "@/features/WiseMap/components/molecules/StopInfoBottomContent.tsx"
import { useBottomPanelControl, useLayersControl } from "@/features/WiseMap/contexts.tsx"
import { stopIcon } from "@/features/WiseMap/assets/leafletIcons.tsx"

const ZOOM_THRESHOLD = 15

export const StopRoutes = () => {
  const bottomPanelControl = useBottomPanelControl()
  const { stopsEnabled: enabled, setStopsEnabled: setEnabled } = useLayersControl()
  const [enabledByZoom, setEnabledByZoom] = useState(true)
  const [bbox, setBbox] = useState<GetStopsByBboxQueryVariables>()

  const { isPending, isError, data, error } = useQuery({
    ...getStopsByBbox(["stopsByBbox"], bbox!),
    enabled: enabled && enabledByZoom,
  })

  const map = useMapEvents({
    moveend: () => {
      const bounds = map.getBounds()

      setBbox({
        maxLat: bounds.getNorth(),
        maxLon: bounds.getEast(),
        minLat: bounds.getSouth(),
        minLon: bounds.getWest(),
      })
    },
    zoomend: () => {
      setEnabledByZoom(map.getZoom() >= ZOOM_THRESHOLD)
    },
  })

  useEffect(() => {
    client.invalidateQueries({ queryKey: ["stopsByBbox"] }).then()
  }, [bbox])

  if (!(enabled && enabledByZoom)) return

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
    <MarkerClusterGroup disableClusteringAtZoom={18}>
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
