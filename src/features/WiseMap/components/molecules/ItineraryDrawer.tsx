import { Button } from "@heroui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@heroui/drawer"
import { useDisclosure } from "@heroui/use-disclosure"
import { LegCard } from "../atoms/LegCard"
import { Leg, Mode } from "../../api/graphql/graphql"
import { getItinerary } from "../../api/getItinerary"
import { useQuery } from "@tanstack/react-query"

export const ItineraryDrawer = () => {
  const { data, isLoading } = useQuery(
    getItinerary({
      from: { lat: 47.4828, lon: 19.17541 },
      to: { lat: 47.49487, lon: 19.04488 },
      modes: [{ mode: Mode.Transit }, { mode: Mode.Walk }],
    }),
  )

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <Button onPress={onOpen}>Open Drawer</Button>
      <Drawer placement="left" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
              <DrawerBody>
                {isLoading ? (
                  <h1>Loading...</h1>
                ) : (
                  data?.plan?.itineraries[0]?.legs.map((leg, i) => (
                    <LegCard key={i} leg={leg! as Leg} />
                  ))
                )}
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
