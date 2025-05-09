import { Marker } from "@adamscybot/react-leaflet-component-marker"
import { useItinerary } from "../../contexts"
import { LatLng, LatLngExpression } from "leaflet"
import MarkerPin from "../../assets/icons/MarkerPin"

export const ItineraryMarkers = () => {
  const { to, from } = useItinerary()
  console.log(to, from)
  return (
    <>
      {to && <Marker position={{ lat: to?.lat!, lng: to?.lon! }} icon={<MarkerPin />} />}
      {from && <Marker position={{ lat: from?.lat!, lng: from?.lon! }} icon={<MarkerPin />} />}
    </>
  )
}
