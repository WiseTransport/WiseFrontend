import { graphql } from "@/graphql"

export const getStopsByBboxQuery = graphql(`
  query getStopsByBbox(
    $maxLat: Float!
    $maxLon: Float!
    $minLat: Float!
    $minLon: Float!
  ) {
    stopsByBbox(maxLat: $maxLat, maxLon: $maxLon, minLat: $minLat, minLon: $minLon) {
      gtfsId
      name
      lat
      lon
      routes {
        gtfsId
        shortName
      }
    }
  }
`)
