import { useQuery } from "@tanstack/react-query"
import { getItinerary } from "../../api/getItinerary"
import { decode } from "../../googlePolyline"

const exampleJSON = `
{
  "data": {
    "plan": {
      "itineraries": [
        {
          "start": "2025-04-24T10:25:29+02:00",
          "end": "2025-04-24T11:33:26+02:00",
          "legs": [
            {
              "mode": "WALK",
              "start": {
                "estimated": null,
                "scheduledTime": "2025-04-24T10:25:29+02:00"
              },
              "end": {
                "estimated": null,
                "scheduledTime": "2025-04-24T10:49:00+02:00"
              },
              "from": {
                "name": "Origin",
                "lat": 47.4828,
                "lon": 19.17541,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:25:29+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:25:29+02:00"
                }
              },
              "to": {
                "name": "Tárna utca",
                "lat": 47.489395,
                "lon": 19.164724,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:49:00+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:49:00+02:00"
                }
              }
            },
            {
              "mode": "BUS",
              "start": {
                "estimated": null,
                "scheduledTime": "2025-04-24T10:49:00+02:00"
              },
              "end": {
                "estimated": null,
                "scheduledTime": "2025-04-24T10:55:00+02:00"
              },
              "from": {
                "name": "Tárna utca",
                "lat": 47.489395,
                "lon": 19.164724,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:49:00+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:49:00+02:00"
                }
              },
              "to": {
                "name": "Örs vezér tere M+H",
                "lat": 47.501472,
                "lon": 19.136134,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:55:00+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:55:00+02:00"
                }
              }
            },
            {
              "mode": "WALK",
              "start": {
                "estimated": null,
                "scheduledTime": "2025-04-24T10:55:00+02:00"
              },
              "end": {
                "estimated": null,
                "scheduledTime": "2025-04-24T10:59:13+02:00"
              },
              "from": {
                "name": "Örs vezér tere M+H",
                "lat": 47.501472,
                "lon": 19.136134,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:55:00+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:55:00+02:00"
                }
              },
              "to": {
                "name": "Örs vezér tere",
                "lat": 47.502922,
                "lon": 19.135963,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:59:13+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T10:59:13+02:00"
                }
              }
            },
            {
              "mode": "SUBWAY",
              "start": {
                "estimated": null,
                "scheduledTime": "2025-04-24T11:03:35+02:00"
              },
              "end": {
                "estimated": null,
                "scheduledTime": "2025-04-24T11:18:35+02:00"
              },
              "from": {
                "name": "Örs vezér tere",
                "lat": 47.502922,
                "lon": 19.135963,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T11:03:35+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T11:03:35+02:00"
                }
              },
              "to": {
                "name": "Batthyány tér",
                "lat": 47.507412,
                "lon": 19.036739,
                "departure": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T11:18:35+02:00"
                },
                "arrival": {
                  "estimated": null,
                  "scheduledTime": "2025-04-24T11:18:35+02:00"
                }
              }
            }
          ]
        }
      ]
    }
  }
}
`

export const LegCard = () => {
  const { data, isLoading } = useQuery(getItinerary({}))

  if (isLoading) return <h1>Loading...</h1>
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "30rem",
        height: "10%",
      }}
    >
      {data?.plan?.itineraries[0]?.legs.map((val, i) => (
        <div
          key={i}
          style={{
            boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontWeight: "bold" }}>{val?.mode}</h1>
          <h3 style={{ color: "grey" }}>{val?.headsign}</h3>
          <h3 style={{ color: "grey" }}>
            {val?.start.scheduledTime} - {val?.end.scheduledTime}
          </h3>
        </div>
      ))}
    </div>
  )
}
