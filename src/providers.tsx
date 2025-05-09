import type { NavigateOptions } from "react-router-dom"
import { useHref, useNavigate } from "react-router-dom"

import { HeroUIProvider } from "@heroui/system"
import { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { client } from "@/features/WiseMap/api/shared.ts"
import { ToastProvider } from "@heroui/toast"
import { ToFromProvider } from "./features/WiseMap/contexts"

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const navigate = useNavigate()

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <QueryClientProvider client={client}>
        <ToFromProvider>
          <ToastProvider />
          {children}
        </ToFromProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  )
}
