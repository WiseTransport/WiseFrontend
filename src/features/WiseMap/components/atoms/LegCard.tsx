import { useQuery } from "@tanstack/react-query"
import { getItinerary } from "../../api/getItinerary"
import { Itinerary, Leg, Mode } from "../../api/graphql/graphql"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card"
import { Tooltip } from "@heroui/tooltip"
import { Icon } from "@iconify/react/dist/iconify.js"
import { getIconName } from "../shared"

interface LegCardProps {
  leg: Leg
  className?: string
}

export const LegCard = ({ leg, ...props }: LegCardProps) => {
  return (
    <Card isPressable className={props.className}>
      <CardBody className="flex flex-row gap-4">
        <div className="flex flex-row w-2/5 gap-2 items-center">
          <Tooltip content={leg.mode}>
            <Icon width="50%" icon={getIconName(leg.mode!)} />
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
