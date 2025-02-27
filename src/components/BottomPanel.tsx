import React from "react";
import { Drawer, DrawerContent, Button, useDisclosure } from "@heroui/react";

import ArrowUpSVG from "@/svg/ArrowUpSVG";

export default function BottomPanel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [placement, setPlacement] = React.useState<"bottom">("bottom");

  const handleOpen = (placement: "bottom") => {
    setPlacement(placement);
    onOpen();
  };

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
        className="z-1"
        isOpen={isOpen}
        placement={placement}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>{(onClose) => <div />}</DrawerContent>
      </Drawer>
    </>
  );
}
