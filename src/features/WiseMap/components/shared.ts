import dayjs from "dayjs"
import { InputCoordinates, Leg, Mode, TransitMode } from "../api/graphql/graphql"
import { LatLngExpression } from "leaflet"

export const getIconName = (mode: TransitMode | Mode) => {
  switch (mode) {
    case Mode.Subway:
      return "la:subway"
    case Mode.Rail:
      return "maki:rail"
    case Mode.Trolleybus:
    case Mode.Tram:
      return "solar:tram-linear"
    case Mode.Walk:
      return "mdi:walk"
    default:
      return "solar:bus-linear"
  }
}

export const formatDuration = (duration: number | undefined) => {
  if (!duration) return "? мин"

  if (duration < 60) return "1 мин"

  const dur = dayjs.duration(duration, "seconds")
  var fmted = ""

  if (dur.hours()) fmted += dur.hours() + " ч. "
  if (dur.minutes()) fmted += dur.minutes() + " мин."

  return fmted
}

export const getUserLocation = (setLocation: ({}: InputCoordinates) => void) => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(
      (position) => setLocation({ lat: position.coords.latitude, lon: position.coords.longitude }),
      (error) => {
        console.error("Error get user location: ", error)
      },
    )
  } else {
    console.log("Geolocation is not supported be this browser")
  }
}
