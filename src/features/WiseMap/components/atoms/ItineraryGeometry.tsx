import { Polyline, useMap } from "react-leaflet"
import { Leg, Mode } from "../../api/graphql/graphql"
import { decode } from "../../googlePolyline"
import { useEffect, useMemo } from "react"
import { useItinerary } from "../../contexts"
import L, { LatLngTuple } from "leaflet"

export const ItineraryGeometry = () => {
  const { legs, to, from } = useItinerary()
  const map = useMap()

  const totalPolyline = useMemo(
    () =>
      legs &&
      L.polyline(
        legs
          ?.map((leg) => decode(leg?.legGeometry?.points))
          .reduce((accumulaotr, curElem) => {
            return accumulaotr.concat(curElem)
          }),
      ),
    [legs],
  )

  const geometries = useMemo(() => {
    return (
      legs &&
      legs.map((leg, i) => (
        <Polyline
          key={i}
          positions={decode(leg?.legGeometry?.points)}
          pathOptions={{
            color: "#" + (leg?.mode === Mode.Walk ? "000" : leg?.trip?.route.color),
            weight: 5,
          }}
        />
      ))
    )
  }, [legs])

  useEffect(() => {
    console.log(legs)
    if (totalPolyline) map.fitBounds(totalPolyline.getBounds())
    if (!totalPolyline && from && to)
      map.fitBounds([Object.values(from) as LatLngTuple, Object.values(to) as LatLngTuple])
  }, [totalPolyline, to, from])

  return geometries
}
