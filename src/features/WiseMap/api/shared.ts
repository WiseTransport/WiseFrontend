import { QueryClient } from "@tanstack/react-query"

export const GRAPHQL_URL = import.meta.env.VITE_GRAPHQL_URL ||
  "http://localhost:8080/otp/routers/default/index/graphql"

export const client = new QueryClient()
