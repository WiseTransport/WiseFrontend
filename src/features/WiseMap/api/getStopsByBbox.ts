import { UseQueryOptions } from "@tanstack/react-query"

import { getGQLQuery } from "@/features/WiseMap/api/shared.ts"

import {
  GetStopsByBboxQuery,
  GetStopsByBboxQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"

const getStopsByBboxQuery = graphql(`
  query getStopsByBbox($maxLat: Float!, $maxLon: Float!, $minLat: Float!, $minLon: Float!) {
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

export const getStopsByBbox = (
  queryKey: unknown[],
  bbox: GetStopsByBboxQueryVariables,
): UseQueryOptions<GetStopsByBboxQuery> => {
  return getGQLQuery(queryKey, getStopsByBboxQuery, { ...bbox })
}
