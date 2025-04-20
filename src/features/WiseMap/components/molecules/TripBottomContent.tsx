import { useQuery } from "@tanstack/react-query"
import { getTripDetails } from "@/features/WiseMap/api/getTripDetails.ts"
import { usePolylineContext } from "@/features/WiseMap/contexts.tsx"
import { useEffect } from "react"
import { decode } from "@/features/WiseMap/googlePolyline.ts"

export const TripBottomContent = ({ gtfsId, color }: { gtfsId: string; color: string }) => {
  const { isPending, isError, data, error } = useQuery(getTripDetails(["tripDetails"], { gtfsId }))
  const setPolyline = usePolylineContext()!.setPolyline

  useEffect(() => {
    setPolyline({ coords: decode(data?.trip?.pattern?.patternGeometry?.points), color })
  }, [data])

  if (isPending) {
    console.log("loading...")
    // addToast({ title: "Loading stoptimes..." })
    return <></>
  }

  if (isError) {
    console.log(error)
    // addToast({ title: "Error!", description: error.message })
    return <></>
  }
}

