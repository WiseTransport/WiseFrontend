import { Drawer, DrawerContent } from "@heroui/drawer"
import { Button } from "@heroui/button"
import ArrowUpSVG from "@/features/WiseMap/assets/icons/ArrowUpSVG.tsx"
import { ModalContentProps } from "@heroui/modal/"
import { useCurrentTripData } from "@/features/WiseMap/contexts.tsx"

export default function BottomDrawer({
  children,
  isOpen,
  onOpen,
  onOpenChange,
  ...props
}: ModalContentProps & {
  isOpen: boolean
  onOpen: () => void
  onOpenChange: () => void
}) {
  const trip = useCurrentTripData()
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
        className="pointer-events-auto w-3/6 max-h-80 max-w-xl sm:mx-auto mx-auto"
        classNames={{
          wrapper: "pointer-events-none",
        }}
        backdrop="transparent"
        isDismissable={false}
        onClose={() => trip.setTripData(undefined)}
      >
        <DrawerContent {...props}>{children}</DrawerContent>
      </Drawer>
    </>
  )
}
