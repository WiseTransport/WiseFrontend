import { UseQueryOptions } from "@tanstack/react-query"
import { request } from "graphql-request"

import { GRAPHQL_URL } from "@/config/graphql.ts"
import { stopsByBboxQuery } from "@/api/queries/getStopsByBbox.ts"

export const getStopsByBbox = (): UseQueryOptions => {
  return {
    queryKey: ["stopsByBbox"],
    queryFn: async () => request(GRAPHQL_URL, stopsByBboxQuery),
    staleTime: 1000 * 60 * 60,
  }
}
