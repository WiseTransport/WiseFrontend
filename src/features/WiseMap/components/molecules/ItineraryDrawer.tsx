import { Button } from "@heroui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer"
import { useDisclosure } from "@heroui/use-disclosure"
import { LegCard } from "../atoms/LegCard"
import { Leg, Mode } from "../../api/graphql/graphql"
import { getItinerary } from "../../api/getItinerary"
import { useQuery } from "@tanstack/react-query"
import { useItinerary } from "../../contexts"
import { useEffect, useMemo } from "react"
import dayjs, { duration } from "dayjs"
import { formatDuration } from "../shared"

export const ItineraryDrawer = () => {
  const { to, from, setLegs } = useItinerary()
  const { data, isLoading, refetch } = useQuery({
    ...getItinerary({
      from: from,
      to: to,
      modes: [{ mode: Mode.Transit }, { mode: Mode.Walk }],
    }),
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchIntervalInBackground: false,
  })

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const fastestItinerary = useMemo(() => {
    const sortedItineraries = data?.plan?.itineraries
      ?.slice()
      .sort((a, b) => (a?.duration ?? 0) - (b?.duration ?? 0))

    // if (!sortedItineraries) return []

    return sortedItineraries?.at(0)
  }, [data])

  const duration = useMemo(() => formatDuration(fastestItinerary?.duration), [fastestItinerary])

  const getLegCards = () => {
    return fastestItinerary?.legs.map((leg, i) => <LegCard key={i} leg={leg! as Leg} />)
  }

  useEffect(() => {
    if (to && from) {
      onOpen()
      refetch()
    }
  }, [to, from])

  useEffect(() => {
    if (fastestItinerary) setLegs(fastestItinerary.legs as (Leg | null)[])
  }, [fastestItinerary])
  console.log(fastestItinerary?.end)
  // if (isLoading) return <h1>Loading...</h1>
  return (
    <>
      <Button onPress={onOpen}>Open Drawer</Button>
      <Drawer placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Маршрут</DrawerHeader>
              <DrawerBody>
                <div className="h-14 px-8 flex justify-between">
                  <span className="text-lg">{duration}</span>
                  <span>
                    Пристигане:{" "}
                    <span className="text-lg">{dayjs(fastestItinerary?.end).format("HH:MM")}</span>
                  </span>
                </div>
                {isLoading ? <h1>Loading...</h1> : getLegCards()}
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Затвори
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
