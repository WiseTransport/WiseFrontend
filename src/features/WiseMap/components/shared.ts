import { Mode, TransitMode } from "../api/graphql/graphql"

export const getIconName = (mode: TransitMode | Mode) => {
  switch (mode) {
    case Mode.Subway:
      return "la:subway"
    case Mode.Rail:
      return "maki:rail"
    case Mode.Trolleybus:
    case Mode.Tram:
      return "solar:tram-linear"
    default:
      return "solar:bus-linear"
  }
}
