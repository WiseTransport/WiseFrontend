import { useState } from "react"
import { Button } from "@heroui/button"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown"
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover"

import SettingsSVG from "@/features/WiseMap/assets/icons/SettingsSVG.tsx"
import ClockSVG from "@/features/WiseMap/assets/icons/ClockSVG.tsx"
import BusSVG from "@/features/WiseMap/assets/icons/BusSVG.tsx"
import TrainSVG from "@/features/WiseMap/assets/icons/TrainSVG.tsx"
import TramSVG from "@/features/WiseMap/assets/icons/TramSVG.tsx"
import { RoundIconButton } from "@/components/atoms/RoundIconButton.tsx"
import DestinationAlarm from "../molecules/DestinationAlarm.tsx"
import UpcomingAlarm from "../molecules/UpcomingAlarm.tsx"
import { useLayersControl } from "../../contexts.tsx"
import BusStop from "../../assets/icons/BusStop.tsx"
import { Icon } from "@iconify/react/dist/iconify.js"
import { SolarEyeBroken } from "../../assets/icons/SolarEyeBroken.tsx"

export default function SideButtons() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const [isPopover1Open, setIsPopover1Open] = useState(false)
  const [isPopover2Open, setIsPopover2Open] = useState(false)
  const { setStopsEnabled, stopsEnabled } = useLayersControl()
  return (
    <div className="fixed z-10 flex flex-col gap-4 justify-evenly items-end top-44 right-4 ml-3 mr-3 rounded-full max-w-sm">
      <RoundIconButton
        icon={<SolarEyeBroken width={35} height={35} />}
        onPress={() => setStopsEnabled(!stopsEnabled)}
      />
      {/* <Dropdown> */}
      {/*   <DropdownTrigger> */}
      {/*     <Button // not using RoundIconButton because it breaks the trigger :( */}
      {/*       isIconOnly */}
      {/*       className=" bg-white rounded-full px-0 min-w-0 w-12 h-12 shadow-md p-1.5" */}
      {/*     > */}
      {/*       <ClockSVG /> */}
      {/*     </Button> */}
      {/*   </DropdownTrigger> */}
      {/*   <DropdownMenu> */}
      {/*     <DropdownItem key="1" onPress={() => setIsPopover1Open(true)}> */}
      {/*       Аларм за предстоящ транспорт */}
      {/*     </DropdownItem> */}
      {/*     <DropdownItem key="2" onPress={() => setIsPopoverOpen(true)}> */}
      {/*       Аларм за дестинация */}
      {/*     </DropdownItem> */}
      {/*   </DropdownMenu> */}
      {/* </Dropdown> */}
      {/**/}
      {/* <Popover */}
      {/*   //className="fixed top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2" */}
      {/*   isOpen={isPopover1Open} */}
      {/*   placement="left" */}
      {/*   onOpenChange={setIsPopover1Open} */}
      {/* > */}
      {/*   <PopoverTrigger asChild> */}
      {/*     <Button className="hidden" /> */}
      {/*   </PopoverTrigger> */}
      {/*   <PopoverContent> */}
      {/*     <div className="px-1 py-2"> */}
      {/*       <UpcomingAlarm /> */}
      {/*     </div> */}
      {/*   </PopoverContent> */}
      {/* </Popover> */}
      {/**/}
      {/* <Popover className="" isOpen={isPopoverOpen} placement="left" onOpenChange={setIsPopoverOpen}> */}
      {/*   <PopoverTrigger asChild> */}
      {/*     <Button className="hidden" /> */}
      {/*   </PopoverTrigger> */}
      {/*   <PopoverContent> */}
      {/*     <div className="px-1 py-2"> */}
      {/*       <DestinationAlarm /> */}
      {/*     </div> */}
      {/*   </PopoverContent> */}
      {/* </Popover> */}
      {/**/}
      {/* <Popover */}
      {/*   isOpen={isPopover2Open} */}
      {/*   onOpenChange={setIsPopover2Open} */}
      {/*   placement="left" */}
      {/**/}
      {/*   //className="fixed top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2" */}
      {/* > */}
      {/*   <PopoverTrigger asChild> */}
      {/*     <Button className="hidden" /> */}
      {/*   </PopoverTrigger> */}
      {/*   <PopoverContent> */}
      {/*     <div className="flex flex-col gap-1 w-full -mb-3 mt-3"> */}
      {/*       <p className="text-base text-start mb-3">Вид на картата</p> */}
      {/*       <div className="flex flex-row justify-evenly pb-8"> */}
      {/*         <div className="flex flex-col justify-around text-center"> */}
      {/*           <img alt="" className="h-12 w-12" src="https://i.imgur.com/ei0Do2J.png" /> */}
      {/*           <p>Основен</p> */}
      {/*         </div> */}
      {/*         <div className="flex flex-col text-center"> */}
      {/*           <img alt="" className="h-12 w-12" src="https://i.imgur.com/woJLsCw.png" /> */}
      {/*           <p>Релеф</p> */}
      {/*         </div> */}
      {/*         <div className="flex flex-col text-center"> */}
      {/*           <img alt="" className="h-12 w-12" src="https://i.imgur.com/bSr0xKK.png" /> */}
      {/*           <p>Сателит</p> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <div className="flex flex-col gap-1 w-full -mb-4"> */}
      {/*       <p className="text-base text-start -mb-1">Параметри на картата</p> */}
      {/*       <div className="flex flex-row justify-evenly pb-8"> */}
      {/*         <div className="flex flex-col text-center"> */}
      {/*           <div className="p-5 h-16 w-16"> */}
      {/*             <BusSVG /> */}
      {/*           </div> */}
      {/*         </div> */}
      {/*         <div> */}
      {/*           <div className="p-5 h-16 w-16"> */}
      {/*             <TramSVG /> */}
      {/*           </div> */}
      {/*         </div> */}
      {/*         <div> */}
      {/*           <div className="p-5 h-16 w-16"> */}
      {/*             <TrainSVG /> */}
      {/*           </div> */}
      {/*         </div> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </PopoverContent> */}
      {/* </Popover> */}
    </div>
  )
}
