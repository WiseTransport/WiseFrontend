import { Card, CardBody, CardProps } from "@heroui/card"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import { useMemo } from "react"

function secondsToTime(seconds: number) {
  const date = new Date()
  date.setUTCHours(0, 0, 0, 0)
  date.setSeconds(seconds)
  console.log(date.toISOString())
  return date.toISOString().substring(11, 16)
}

const getMarqueeText = (text: string) => (
  <MarqueeText
    className="flex items-center"
    direction="right"
    duration={10}
    pauseOnHover={true}
  >
    &nbsp;&nbsp;&nbsp;&nbsp; {text}
  </MarqueeText>
)

export interface TripCardProps extends CardProps {
  shortName?: string | null
  color?: string | null
  textColor?: string | null
  headsign?: string | null
  scheduledArrival?: number | null

  [key: string]: any
}

export interface ProcessedTripProps {
  shortName: string
  color: string
  textColor: string
  headsign: string
  scheduledArrival: number
}

export const TripCard = (props: TripCardProps) => {
  const { shortName, color, textColor, headsign, scheduledArrival, ...cardProps } = props
  const defaults = {
    shortName: "???",
    color: "FFFFFF",
    textColor: "000000",
    headsign: "Unnamed trip",
    scheduledArrival: -1,
  } as TripCardProps

  const processedProps = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(props).map(([key, value]) =>
          value ? [key, value] : [key, defaults[key]],
        ),
      ) as ProcessedTripProps,
    [props],
  )
  const time = useMemo(
    () =>
      processedProps.scheduledArrival >= 0
        ? secondsToTime(processedProps.scheduledArrival)
        : "???",
    [processedProps],
  )
  const marqueeHeadsign = useMemo(
    () => getMarqueeText(processedProps.headsign),
    [processedProps],
  )

  return (
    <Card {...cardProps} className={props.className + " h-20 w-full"}>
      <CardBody className="flex flex-row gap-4">
        <div
          className={" rounded-lg aspect-square flex justify-center"}
          style={{ backgroundColor: "#" + processedProps.color }}
        >
          <p style={{ color: "#" + processedProps.textColor }} className="text-lg m-auto">
            {shortName}
          </p>
        </div>
        {marqueeHeadsign}
        <div className="aspect-square flex justify-center">
          <span className="text-lg m-auto">{time}</span>
        </div>
      </CardBody>
    </Card>
  )
}
