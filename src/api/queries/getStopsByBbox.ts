import { graphql } from "@/gql"

export const stopsByBboxQuery = graphql(`
  query StopsByBboxQuery {
    stopsByBbox(
      maxLat: 47.566887
      maxLon: 19.250717
      minLat: 47.424652
      minLon: 18.878239
    ) {
      gtfsId
      name
      lat
      lon
      routes {
        id
        shortName
      }
    }
  }
`)
