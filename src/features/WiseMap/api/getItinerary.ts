import { UseQueryOptions } from "@tanstack/react-query"

import { getGQLQuery } from "@/features/WiseMap/api/shared.ts"
import {
  GetItineraryQuery,
  GetItineraryQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"

const getItineraryQuery = graphql(`
  query getItinerary($from: InputCoordinates, $to: InputCoordinates, $modes: [TransportMode]) {
    plan(from: $from, to: $to, transportModes: $modes) {
      itineraries {
        duration
        start
        end
        legs {
          mode
          headsign
          start {
            estimated {
              delay
              time
            }
            scheduledTime
          }
          start {
            estimated {
              delay
              time
            }
            scheduledTime
          }
          end {
            estimated {
              delay
              time
            }
            scheduledTime
          }
          from {
            name
            lat
            lon
            departure {
              estimated {
                delay
                time
              }
              scheduledTime
            }
            arrival {
              estimated {
                delay
                time
              }
              scheduledTime
            }
          }
          to {
            name
            lat
            lon
            departure {
              estimated {
                delay
                time
              }
              scheduledTime
            }
            arrival {
              estimated {
                delay
                time
              }
              scheduledTime
            }
          }
          legGeometry {
            points
          }
          trip {
            tripHeadsign
            route {
              color
              textColor
              shortName
            }
          }
          duration
          distance
        }
      }
    }
  }
`)

const queryKey = ["itinerary"]

export const getItinerary = (
  variables: GetItineraryQueryVariables,
): UseQueryOptions<GetItineraryQuery> => {
  return getGQLQuery(queryKey, getItineraryQuery, variables)
}
