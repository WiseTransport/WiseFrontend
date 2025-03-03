import { Drawer, DrawerBody, DrawerContent, DrawerHeader } from "@heroui/drawer"
import { Button } from "@heroui/button"
import { useDisclosure } from "@heroui/use-disclosure"

import BusSVG from "@/features/WiseMap/static/icons/BusSVG.tsx"
import TrainSVG from "@/features/WiseMap/static/icons/TrainSVG.tsx"
import TramSVG from "@/features/WiseMap/static/icons/TramSVG.tsx"
import ArrowUpSVG from "@/features/WiseMap/static/icons/ArrowUpSVG.tsx"

export default function BottomPanel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div className="fixed w-full bottom-0 flex flex-wrap gap-3">
        <Button
          className="mx-auto w-3/6 max-w-xl bg-[#EC442C] rounded-b-none rounded-t-lg"
          onPress={onOpen}
        >
          <div className="w-10 mx-auto">
            <ArrowUpSVG />
          </div>
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onOpenChange={onOpenChange}
        className="pointer-events-auto w-3/6 max-w-xl sm:mx-auto mx-auto"
        classNames={{
          wrapper: "pointer-events-none",
        }}
        backdrop="transparent"
        isDismissable={false}
      >
        <DrawerContent>
          {() => (
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
                      <BusSVG />
                    </div>
                  </div>
                  <div>
                    <div className="p-5 h-16 w-16">
                      <TramSVG />
                    </div>
                  </div>
                  <div>
                    <div className="p-5 h-16 w-16">
                      <TrainSVG />
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
