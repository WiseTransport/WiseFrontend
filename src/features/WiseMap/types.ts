import { ReactNode } from "react"

export type BottomPanelControl = {
  setBottomPanelContent: (state: ReactNode) => void
  onClose: () => void
  onOpen: () => void
}

export type CurrentTripData = {
  gtfsId: string
  color: string
}
