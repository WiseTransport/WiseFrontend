import { Marker } from "@adamscybot/react-leaflet-component-marker"
import { Icon } from "@iconify/react/dist/iconify.js"
import { getIconName } from "../shared"
import { LatLngExpression } from "leaflet"
import { TransitMode } from "../../api/graphql/graphql"
import VehicleMarkerSVG from "../../assets/icons/VehicleMarkerSVG"

interface VehicleMarkerProps {
  gtfsId: string
  shortName: string
  position: LatLngExpression
  heading: number
  mode: TransitMode
  color: string
  textColor: string
}

export const VehicleMarker = ({
  gtfsId,
  shortName,
  position,
  heading,
  mode,
  color,
  textColor,
}: VehicleMarkerProps) => {
  const icon = (
    <div style={{ zIndex: 999 }} className="absolute -translate-x-1/2 -translate-y-1/2">
      {/* Placeholder for vehicle name */}
      <div className="absolute right-4 translate-y-[35%] w-fit h-6 bg-white rounded-md flex items-center">
        <span className="ml-2 mr-6 w-fit text-center">{shortName}</span>
      </div>

      <span className="relative flex justify-center items-center size-10 aspect-square">
        <VehicleMarkerSVG
          style={{ transform: `rotate(${heading}deg)` }}
          className="absolute w-10 pb-1"
          bgFill={color}
        />
        <Icon style={{ color: textColor }} width="1.1rem" icon={getIconName(mode)} />
      </span>
    </div>
  )

  return <Marker key={gtfsId} icon={icon} position={position} />
}
