import { UseQueryOptions } from "@tanstack/react-query"

import {
  GetTripDetailsQuery,
  GetTripDetailsQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"
import { getGQLQuery } from "./shared"

const getTripDetailsQuery = graphql(`
  query getTripDetails($gtfsId: String!) {
    trip(id: $gtfsId) {
      pattern {
        code
        patternGeometry {
          points
        }
      }
      stops {
        name
        lon
        lat
      }
    }
  }
`)

export const getTripDetails = (
  queryKey: unknown[],
  variables: GetTripDetailsQueryVariables,
): UseQueryOptions<GetTripDetailsQuery> => {
  console.log(variables)
  return getGQLQuery(queryKey, getTripDetailsQuery, variables)
}
