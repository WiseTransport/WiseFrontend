import { request, Variables } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query"
import { DocumentNode } from "graphql"

export const GRAPHQL_URL =
  import.meta.env.VITE_GRAPHQL_URL || "http://localhost:8080/otp/routers/default/index/graphql"

export const client = new QueryClient()

export const refetchQueryOptions = (interval: number) => ({
  refetchInterval: interval * 1000,
  refetchIntervalInBackground: true,
  refetchOnWindowFocus: false,
})

export const getGQLQuery = <Query, V extends Variables = Variables>(
  key: unknown[],
  query: DocumentNode,
  variables: V,
): UseQueryOptions<Query> => {
  return {
    queryKey: key,
    queryFn: async () => request<Query>(GRAPHQL_URL, query, variables),
    refetchOnWindowFocus: true,
  }
}
