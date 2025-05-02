import { TransitMode } from "../api/graphql/graphql"

export const getIconName = (mode: TransitMode) => {
  switch (mode) {
    case TransitMode.Subway:
      return "la:subway"
    case TransitMode.Rail:
      return "maki:rail"
    case TransitMode.Trolleybus:
    case TransitMode.Tram:
      return "solar:tram-linear"
    default:
      return "solar:bus-linear"
  }
}
