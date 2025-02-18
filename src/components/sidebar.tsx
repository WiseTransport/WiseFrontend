import { useState } from "react";
import { Button } from "@heroui/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";

import DestinationAlarm from "@/components/destinationAlarm";
import SettingsSVG from "@/svg/SettingsSVG.tsx";
import ClockSVG from "@/svg/ClockSVG.tsx";
import UpcomingAlarm from "@/components/upcomingAlarm";

export default function Sidebar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isPopover1Open, setIsPopover1Open] = useState(false);

  return (
    <div className="flex flex-col gap-4 justify-evenly items-end fixed top-32 right-4 ml-3 mr-3 rounded-full max-w-sm">
      <Button className="bg-white rounded-full px-0 min-w-0 w-12 h-12 shadow-md">
        <SettingsSVG classes="1" />
      </Button>
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-white rounded-full w-12 h-12 shadow-md px-0 min-w-0">
            <ClockSVG classes="1" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem key="1" onClick={() => setIsPopover1Open(true)}>
            Аларм за предстоящ транспорт
          </DropdownItem>
          <DropdownItem key="2" onClick={() => setIsPopoverOpen(true)}>
            Аларм за дестинация
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Popover
        isOpen={isPopover1Open}
        onOpenChange={setIsPopover1Open}
        placement="top"
      >
        <PopoverTrigger asChild>
          <Button className="hidden" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <UpcomingAlarm />
          </div>
        </PopoverContent>
      </Popover>

      <Popover
        isOpen={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        placement="left"
        className="relative"
      >
        <PopoverTrigger asChild>
          <Button className="hidden" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <DestinationAlarm />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
