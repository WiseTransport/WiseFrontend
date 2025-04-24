import { request, Variables } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { getGQLQuery, GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
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

const queryKey = ["stoptimes"]

export const getStoptimes = (
  variables: GetStoptimesQueryVariables,
): UseQueryOptions<GetStoptimesQuery> => {
  return getGQLQuery(queryKey, getStoptimesQuery, variables)
}
