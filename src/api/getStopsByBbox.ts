import { request } from "graphql-request"

import { GRAPHQL_URL } from "@/config/graphql.ts"
import { getStopsByBboxQuery } from "@/api/queries/getStopsByBbox.ts"
import { GetStopsByBboxQuery, GetStopsByBboxQueryVariables } from "@/graphql/graphql.ts"
import { UseQueryOptions } from "@tanstack/react-query"

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
