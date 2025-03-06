import { Drawer, DrawerContent } from "@heroui/drawer"
import { Button } from "@heroui/button"
import ArrowUpSVG from "@/features/WiseMap/static/icons/ArrowUpSVG.tsx"
import { ModalContentProps } from "@heroui/modal/"

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
  console.log(children)
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
        <DrawerContent {...props}>{children}</DrawerContent>
      </Drawer>
    </>
  )
}
