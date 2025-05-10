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
import ArrowUpSVG from "../../assets/icons/ArrowUpSVG"

export const ItineraryDrawer = () => {
  const { to, from, legs, setLegs } = useItinerary()
  const { data, isLoading, refetch, isRefetching, isStale } = useQuery({
    ...getItinerary({
      from: from,
      to: to,
      modes: [{ mode: Mode.Transit }, { mode: Mode.Walk }],
      searchWindow: 21600,
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
    setLegs(fastestItinerary?.legs)
  }, [fastestItinerary])

  return (
    <>
      {/* <Button onPress={onOpen}>Open Drawer</Button> */}
      {data && (
        <div className="fixed h-full top-72 left-0 flex flex-wrap gap-3">
          <Button
            className="mx-auto h-1/6 w-6 min-w-8 bg-[#EC442C] rounded-l-none rounded-r-lg"
            onPress={onOpen}
          >
            <div className="w-10 mx-auto rotate-90">
              <ArrowUpSVG width={35} />
            </div>
          </Button>
        </div>
      )}
      <Drawer placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Маршрут</DrawerHeader>
              {isLoading || isRefetching ? (
                <h1>Зарежда се...</h1>
              ) : data?.plan?.itineraries.length === 0 ? (
                <span className="mx-auto text-lg">Няма намерен маршрут :(</span>
              ) : (
                <DrawerBody>
                  <div className="h-14 px-2 flex justify-between">
                    <span className="text-lg">Време в път: {duration}</span>
                    {/* <span> */}
                    {/*   Тръгване:{" "} */}
                    {/*   <span className="text-lg"> */}
                    {/*     {dayjs(fastestItinerary?.start).format("HH:MM")} */}
                    {/*   </span> */}
                    {/* </span> */}
                    {/* <span> */}
                    {/*   Пристигане:{" "} */}
                    {/*   <span className="text-lg"> */}
                    {/*     {dayjs(fastestItinerary?.end).format("HH:MM")} */}
                    {/*   </span> */}
                    {/* </span> */}
                  </div>
                  {getLegCards()}
                </DrawerBody>
              )}
              <DrawerFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Затвори
                </Button>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose()
                    setLegs(undefined)
                  }}
                >
                  Край
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
