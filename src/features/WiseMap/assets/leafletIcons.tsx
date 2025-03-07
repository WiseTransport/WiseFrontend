import { Icon } from "leaflet"
import BusStop from "../assets/rawIcons/bus-stop.svg"

export const stopIcon = new Icon ({
  iconUrl: BusStop,
  iconSize : [35,35], // size of the icon
  // iconAnchor : [22,94], // point of the icon which will correspond to marker's location
  // popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
})

export const greenIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});