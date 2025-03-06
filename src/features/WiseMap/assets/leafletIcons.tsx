import { Icon } from "leaflet"
import BusStop from "../assets/rawIcons/bus-stop.svg"

export const stopIcon = new Icon ({
  iconUrl: BusStop,
  iconSize : [35,35], // size of the icon
  // iconAnchor : [22,94], // point of the icon which will correspond to marker's location
  // popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
})