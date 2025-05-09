import dayjs from "dayjs"
import { Leg, Mode, TransitMode } from "../api/graphql/graphql"

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
