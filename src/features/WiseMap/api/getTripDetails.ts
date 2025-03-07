import { request } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
import {
  GetTripDetailsQuery,
  GetTripDetailsQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"

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
  variables: GetTripDetailsQueryVariables,
): UseQueryOptions<GetTripDetailsQuery> => {
  return {
    queryKey: ["tripDetails"],
    queryFn: async () =>
      request<GetTripDetailsQuery, GetTripDetailsQueryVariables>(
        GRAPHQL_URL,
        getTripDetailsQuery,
        {
          gtfsId: variables.gtfsId,
        },
      ),
    refetchOnWindowFocus: true,
  }
}
