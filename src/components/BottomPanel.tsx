import React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react"
import BusSVG from "@/svg/BusSVG"
import TrainSVG from "@/svg/TrainSVG"
import TramSVG from "@/svg/TramSVG"
import ArrowUpSVG from "@/svg/ArrowUpSVG"

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [placement, setPlacement] = React.useState<"bottom">("bottom")

  const handleOpen = (placement: "bottom") => {
    setPlacement(placement)
    onOpen()
  }

  return (
    <>
      <div className="fixed w-full bottom-0 flex flex-wrap gap-3">
        {["bottom"].map((placement) => (
          <Button
            key={placement}
            className="capitalize w-full bg-[#EC442C] rounded-none"
            onPress={() => handleOpen(placement as "bottom")}
          >
            <ArrowUpSVG classes="1" />
          </Button>
        ))}
      </div>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onOpenChange={onOpenChange}
        className="z-1"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <div>
                <DrawerHeader className="flex flex-col gap-1 w-full">
                  Вид на картата
                </DrawerHeader>
                <DrawerBody className="flex flex-row justify-evenly w-full">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://i.imgur.com/ei0Do2J.png"
                      className="h-12 w-12"
                      alt=""
                    />
                    <p>Основен</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://i.imgur.com/woJLsCw.png"
                      className="h-12 w-12"
                      alt=""
                    />
                    <p>Релеф</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="https://i.imgur.com/bSr0xKK.png"
                      className="h-12 w-12"
                      alt=""
                    />
                    <p>Сателит</p>
                  </div>
                </DrawerBody>
              </div>
              <div>
                <DrawerHeader className="flex flex-col gap-1 w-full">
                  Параметри на картата
                </DrawerHeader>
                <DrawerBody className="flex flex-row justify-evenly pb-8">
                  <div className="flex flex-col text-center">
                    <div className="p-5 h-16 w-16">
                      <BusSVG classes="1" />
                    </div>
                  </div>
                  <div>
                    <div className="p-5 h-16 w-16">
                      <TramSVG classes="1" />
                    </div>
                  </div>
                  <div>
                    <div className="p-5 h-16 w-16">
                      <TrainSVG classes="1" />
                    </div>
                  </div>
                </DrawerBody>
              </div>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  )
}
export { App as BottomPanel }
