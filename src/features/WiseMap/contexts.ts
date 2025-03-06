import { createContext, useContext } from "react"
import { BottomPanelControl } from "@/features/WiseMap/types.ts"

export const BottomPanelControlContext = createContext<BottomPanelControl | null>(null)
export const useBottomPanelControl = () => useContext(BottomPanelControlContext)
