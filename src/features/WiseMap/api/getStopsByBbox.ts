import { request } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
import {
  GetStopsByBboxQuery,
  GetStopsByBboxQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"

const getStopsByBboxQuery = graphql(`
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

export const getStopsByBbox = (
  bbox: GetStopsByBboxQueryVariables,
): UseQueryOptions<GetStopsByBboxQuery> => {
  return {
    queryKey: ["stopsByBbox"],
    queryFn: async () =>
      request<GetStopsByBboxQuery, GetStopsByBboxQueryVariables>(
        GRAPHQL_URL,
        getStopsByBboxQuery,
        {
          maxLat: bbox.maxLat,
          maxLon: bbox.maxLon,
          minLat: bbox.minLat,
          minLon: bbox.minLon,
        },
      ),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  }
}
