import { graphql } from "@/gql"

export const getRouteDetails = graphql(`
  query getRouteDetails($gtfsId: String!) {
    route(id: $gtfsId) {
      shortName
      color
      patterns {
        patternGeometry {
          points
        }
      }
    }
  }
`)
