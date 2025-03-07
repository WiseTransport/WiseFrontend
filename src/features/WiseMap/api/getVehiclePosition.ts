import { graphql } from "@/features/WiseMap/api/graphql"
import {
  GetVehiclePositionQuery,
  GetVehiclePositionQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { UseQueryOptions } from "@tanstack/react-query"
import { request } from "graphql-request"
import { GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"

const getVehiclePositionQuery = graphql(`
  query getVehiclePosition($code: String!) {
    pattern(id: $code) {
      vehiclePositions {
        stopRelationship {
          status
        }
        trip {
          gtfsId
        }
        heading
        lat
        lon
        speed
      }
    }
  }
`)

export const getVehiclePosition = (
  variables: GetVehiclePositionQueryVariables,
): UseQueryOptions<GetVehiclePositionQuery> => {
  return {
    queryKey: ["vehiclePosition"],
    queryFn: async () =>
      request<GetVehiclePositionQuery, GetVehiclePositionQueryVariables>(
        GRAPHQL_URL,
        getVehiclePositionQuery,
        {
          code: variables.code,
        },
      ),
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 1000,
  }
}
