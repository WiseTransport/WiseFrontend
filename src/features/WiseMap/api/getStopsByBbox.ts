import { request } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
import { getStopsByBboxQuery } from "@/features/WiseMap/api/queries/getStopsByBbox.ts"
import {
  GetStopsByBboxQuery,
  GetStopsByBboxQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"

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
