import { Card, CardBody, CardProps } from "@heroui/card"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { useMemo } from "react"
import dayjs from "dayjs"
import { Icon } from "@iconify/react"
import { TransitMode } from "@/features/WiseMap/api/graphql/graphql.ts"
import { Tooltip } from "@heroui/tooltip"
import { card } from "@heroui/theme"
import { getIconName } from "../shared"

function secondsToTime(seconds: number) {
  const date = dayjs.tz(dayjs(), "Europe/Budapest").startOf("day").second(seconds)

  const diff = Math.floor(date.diff() / 1000)

  if (diff >= 0 && diff <= 20 * 60) {
    return Math.floor(diff / 60) + " мин."
  }

  return date.format("HH:mm")
}

const getMarqueeText = (text: string) => (
  <MarqueeText className="flex items-center" direction="right" duration={10} pauseOnHover={true}>
    &nbsp;&nbsp;&nbsp;&nbsp; {text}
  </MarqueeText>
)

export interface TripCardProps extends CardProps {
  shortName?: string | null
  color?: string | null
  textColor?: string | null
  headsign?: string | null
  scheduledArrival?: number | null
  mode?: TransitMode | null

  [key: string]: any
}

export interface ProcessedTripProps {
  shortName: string
  color: string
  textColor: string
  headsign: string
  scheduledArrival: number
  mode: TransitMode
}

export const TripCard = (props: TripCardProps) => {
  const { shortName, color, textColor, headsign, scheduledArrival, mode, ...cardProps } = props
  const defaults = {
    shortName: "???",
    color: "FFFFFF",
    textColor: "000000",
    headsign: "Unnamed trip",
    scheduledArrival: -1,
    mode: "BUS",
  } as TripCardProps

  const processedProps = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(props).map(([key, value]) => (value ? [key, value] : [key, defaults[key]])),
      ) as ProcessedTripProps,
    [props],
  )
  const time = useMemo(
    () =>
      processedProps.scheduledArrival >= 0 ? secondsToTime(processedProps.scheduledArrival) : "???",
    [processedProps],
  )
  const marqueeHeadsign = useMemo(() => getMarqueeText(processedProps.headsign), [processedProps])

  return (
    <Card {...cardProps} isPressable className={props.className + " h-20 w-full"}>
      <CardBody className="flex flex-row gap-4">
        <div className="flex flex-row w-2/5 gap-2 items-center">
          <Tooltip content={processedProps.mode}>
            <Icon width="50%" icon={getIconName(processedProps.mode)} />
          </Tooltip>
          <div
            className={"w-[65%] rounded-lg aspect-square flex justify-center"}
            style={{ backgroundColor: "#" + processedProps.color }}
          >
            <p style={{ color: "#" + processedProps.textColor }} className="text-lg m-auto">
              {shortName}
            </p>
          </div>
        </div>
        {marqueeHeadsign}
        <div className="aspect-square flex justify-center">
          <span className="text-lg m-auto text-center min-w-[4rem]">{time}</span>
        </div>
      </CardBody>
    </Card>
  )
}
