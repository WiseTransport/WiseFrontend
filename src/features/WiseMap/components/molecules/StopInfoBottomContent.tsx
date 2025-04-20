import { useEffect, useMemo } from "react"
import { DrawerBody, DrawerHeader } from "@heroui/drawer"
import { useQuery } from "@tanstack/react-query"
import { client } from "@/features/WiseMap/api/shared.ts"
import { getStoptimes } from "@/features/WiseMap/api/getStoptimes.ts"
import { TripCard } from "@/features/WiseMap/components/atoms/TripCard.tsx"
import { useBottomPanelControl, useCurrentTripData } from "@/features/WiseMap/contexts.tsx"

export const StopInfoBottomContent = ({ gtfsId }: { gtfsId: string }) => {
  const trip = useCurrentTripData()
  const bottomPanelControl = useBottomPanelControl()
  const { isPending, isError, data, error } = useQuery(
    getStoptimes(["stoptimes"], {
      gtfsId: gtfsId,
      startTime: Math.floor(Date.now() / 1000),
    }),
  )

  useEffect(() => {
    client.invalidateQueries({ queryKey: ["stoptimes"] }).then()
  }, [gtfsId])

  const tripCards = useMemo(
    () =>
      data?.stop?.stoptimesForPatterns?.map((metaData) => {
        const route = metaData!.pattern!.route
        const stoptimes = metaData!.stoptimes!
        const closestStoptime = stoptimes[stoptimes!.length - 1]!

        return (
          <TripCard
            {...route}
            onPress={() => {
              console.log("clicked", trip)
              if (!trip) {
                console.log("exit")
                return
              }
              trip.setTripData({
                gtfsId: closestStoptime.trip?.gtfsId!,
                color: route.color!,
              })
              // if (!bottomPanelControl) return
              // bottomPanelControl.onOpen()
              // bottomPanelControl.setBottomPanelContent(
              //   <TripBottomContent color={route.color!} gtfsId={closestStoptime.trip?.gtfsId!} />,
              // )
            }}
            key={metaData?.pattern?.code}
            headsign={closestStoptime.trip!.tripHeadsign}
            scheduledArrival={closestStoptime.scheduledArrival}
          />
        )
      }),
    [data],
  )

  if (isPending) {
    console.log("loading...")
    // addToast({ title: "Loading stoptimes..." })
    return <></>
  }

  if (isError) {
    console.log(error)
    // addToast({ title: "Error!", description: error.message })
    return <></>
  }

  return (
    <div>
      <DrawerHeader>{data.stop!.name}</DrawerHeader>
      <DrawerBody>{tripCards}</DrawerBody>
    </div>
  )
}
