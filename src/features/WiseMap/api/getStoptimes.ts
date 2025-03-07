import { request } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
import {
  GetStoptimesQuery,
  GetStoptimesQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"

const getStoptimesQuery = graphql(`
  query getStoptimes($gtfsId: String!, $startTime: Long!) {
    stop(id: $gtfsId) {
      name
      stoptimesForPatterns(startTime: $startTime) {
        pattern {
          code
          route {
            mode
            shortName
            color
            textColor
          }
        }
        stoptimes {
          scheduledArrival
          trip {
            gtfsId
            tripHeadsign
          }
        }
      }
    }
  }
`)

export const getStoptimes = (
  variables: GetStoptimesQueryVariables,
): UseQueryOptions<GetStoptimesQuery> => {
  return {
    queryKey: ["stoptimes"],
    queryFn: async () =>
      request<GetStoptimesQuery, GetStoptimesQueryVariables>(
        GRAPHQL_URL,
        getStoptimesQuery,
        {
          gtfsId: variables.gtfsId,
          startTime: variables.startTime,
        },
      ),
    refetchOnWindowFocus: true,
  }
}
