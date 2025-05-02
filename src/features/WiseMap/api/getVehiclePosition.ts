import { graphql } from "@/features/WiseMap/api/graphql"
import {
  GetVehiclePositionQuery,
  GetVehiclePositionQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { UseQueryOptions } from "@tanstack/react-query"
import { getGQLQuery, refetchQueryOptions } from "./shared"

const getVehiclePositionQuery = graphql(`
  query getVehiclePosition($code: String!) {
    pattern(id: $code) {
      vehiclePositions {
        stopRelationship {
          status
        }
        trip {
          gtfsId
          route {
            mode
            color
            textColor
            shortName
          }
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
  queryKey: unknown[],
  variables: GetVehiclePositionQueryVariables,
): UseQueryOptions<GetVehiclePositionQuery> => {
  return {
    ...getGQLQuery(queryKey, getVehiclePositionQuery, variables),
    ...refetchQueryOptions(10),
  }
}
