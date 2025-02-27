import { GraphQLClient } from "graphql-request"

export const endpoint = "http://localhost:8080/otp/routers/default/index/graphql"
export const client = new GraphQLClient(endpoint)
