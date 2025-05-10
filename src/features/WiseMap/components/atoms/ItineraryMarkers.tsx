import { Marker } from "@adamscybot/react-leaflet-component-marker"
import { useItinerary } from "../../contexts"
import { LatLng, LatLngExpression } from "leaflet"
import MarkerPin from "../../assets/icons/MarkerPin"
import { MapPointSVG } from "../../assets/icons/MapPointSVG"

export const ItineraryMarkers = () => {
  const { to, from } = useItinerary()

  return (
    <>
      {to && (
        <Marker
          position={{ lat: to?.lat!, lng: to?.lon! }}
          icon={<MapPointSVG width={35} height={35} stroke="#000" strokeWidth={0.5} />}
        />
      )}
      {from && (
        <Marker
          position={{ lat: from?.lat!, lng: from?.lon! }}
          icon={<MapPointSVG width={35} height={35} stroke="#000" strokeWidth={0.5} />}
        />
      )}{" "}
    </>
  )
}
