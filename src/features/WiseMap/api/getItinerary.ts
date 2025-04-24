import { request, Variables } from "graphql-request"
import { UseQueryOptions } from "@tanstack/react-query"

import { getGQLQuery, GRAPHQL_URL } from "@/features/WiseMap/api/shared.ts"
import {
  GetItineraryQuery,
  GetItineraryQueryVariables,
} from "@/features/WiseMap/api/graphql/graphql.ts"
import { graphql } from "@/features/WiseMap/api/graphql"

const getItineraryQuery = graphql(`
  query getItinerary {
    plan(
      # these coordinate are in Portland, change this to YOUR origin
      from: { lat: 47.48280, lon: 19.17541 }
      # these coordinate are in Portland, change this to YOUR destination
      to: { lat: 47.49487, lon: 19.04488 }
      # use the correct date and time of your request
      date: "2025-04-24"
      time: "11:10"
      # choose the transport modes you need
      transportModes: [{ mode: WALK }, { mode: TRANSIT }]
    ) {
      itineraries {
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
