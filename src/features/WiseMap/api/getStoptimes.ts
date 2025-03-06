import { request } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
import {
  GetStoptimesQuery,
  GetStoptimesQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { getStoptimesQuery } from "@/features/WiseMap/api/queries/getStoptimes.ts"

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
    refetchOnWindowFocus: false,
  }
}
