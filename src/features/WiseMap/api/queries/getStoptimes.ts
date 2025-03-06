import { graphql } from "../graphql"

export const getStoptimesQuery = graphql(`
  query getStoptimes($gtfsId: String!, $startTime: Long!) {
    stop(id: $gtfsId) {
      name
      stoptimesForPatterns(startTime: $startTime) {
        pattern {
          code
          route {
            mode
            shortName
            color
            textColor
          }
        }
        stoptimes {
          scheduledArrival
          trip {
            tripHeadsign
            pattern {
              code
            }
          }
        }
      }
    }
  }
`)
