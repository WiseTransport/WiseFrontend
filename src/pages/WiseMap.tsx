import { ReactNode, useState } from "react"
import { useDisclosure } from "@heroui/use-disclosure"

import { WiseMapContainer } from "@/features/WiseMap/components/organisms/WiseMapContainer.tsx"
import BottomDrawer from "@/features/WiseMap/components/organisms/BottomDrawer.tsx"
import SearchBar from "@/features/WiseMap/components/organisms/SearchBar.tsx"
import SideButtons from "@/features/WiseMap/components/organisms/SideButtons.tsx"
import CurrentGeoButton from "@/features/WiseMap/components/molecules/CurrentGeoButton.tsx"
import { BottomPanelControlContext, TripDataProvider } from "@/features/WiseMap/contexts.tsx"
import { ItineraryDrawer } from "@/features/WiseMap/components/molecules/ItineraryDrawer"

export const WiseMap = () => {
  const { onOpen, onOpenChange, isOpen, onClose } = useDisclosure()
  const [bottomPanelContent, setBottomPanelContent] = useState<ReactNode>()
  const [location, setLocation] = useState({
    latitude: 47.4930276012875,
    longitude: 19.055050837881712,
  })

  return (
    <BottomPanelControlContext.Provider value={{ onOpen, setBottomPanelContent, onClose }}>
      <TripDataProvider>
        <div className="h-full w-full">
          <SearchBar setLocation={setLocation} />
          <SideButtons />
          <WiseMapContainer location={location} />
          <CurrentGeoButton setLocation={setLocation} />
          <ItineraryDrawer />
          <BottomDrawer onOpen={onOpen} onOpenChange={onOpenChange} isOpen={isOpen}>
            {bottomPanelContent}
          </BottomDrawer>
        </div>
      </TripDataProvider>
    </BottomPanelControlContext.Provider>
  )
}
