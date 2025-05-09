import { useQuery } from "@tanstack/react-query"
import { getItinerary } from "../../api/getItinerary"
import { Itinerary, Leg, Mode } from "../../api/graphql/graphql"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"
import { Tooltip } from "@heroui/tooltip"
import { Icon } from "@iconify/react/dist/iconify.js"
import { formatDuration, getIconName } from "../shared"
import { useMemo } from "react"
import MarqueeText from "react-marquee-text"
import dayjs from "dayjs"

interface LegCardProps {
  leg: Leg
  className?: string
}

export const LegCard = ({ leg, ...props }: LegCardProps) => {
  const marqueeHeadsign = useMemo(
    () =>
      leg.trip ? (
        <MarqueeText
          className="flex items-center"
          direction="right"
          duration={10}
          pauseOnHover={true}
        >
          &nbsp;&nbsp;&nbsp;&nbsp; {leg.trip.tripHeadsign}
        </MarqueeText>
      ) : undefined,
    [leg],
  )

  const duration = useMemo(() => formatDuration(leg.duration!), [leg])

  return (
    <Card isPressable className={props.className}>
      <CardBody className="flex flex-row justify-between px-10">
        <div className="flex flex-row w-32 gap-2 items-center">
          {leg.mode == Mode.Walk && (
            <Tooltip content={leg.mode}>
              <Icon width="55%" icon={getIconName(leg.mode!)} />
            </Tooltip>
          )}
          {leg.trip?.route && (
            <Tooltip content={leg.mode}>
              <div
                className={"w-[65%] rounded-lg aspect-square flex justify-center"}
                style={{ backgroundColor: "#" + leg.trip.route.color }}
              >
                <p style={{ color: "#" + leg.trip.route.textColor }} className="text-lg m-auto">
                  {leg.trip.route.shortName}
                </p>
              </div>
            </Tooltip>
          )}
        </div>
        {leg.trip ? (
          marqueeHeadsign
        ) : (
          <span className="text-center flex items-center">
            Разстояние:{" "}
            {leg.distance
              ? leg.distance < 1000
                ? `${leg.distance.toFixed(0)}м.`
                : `${(leg.distance / 1000).toFixed(1)}км.`
              : null}
          </span>
        )}
        <div className="aspect-square flex justify-center">
          <span className="text-lg m-auto text-center min-w-[4rem]">{duration}</span>
        </div>
      </CardBody>
    </Card>
  )
}
