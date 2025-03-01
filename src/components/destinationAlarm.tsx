import { TimeInput } from "@heroui/react"

export default function DestinationAlarm() {
  return (
    <div className="flex flex-wrap gap-4">
      <TimeInput label="Колко време преди дестинацията Ви да Ви събудим?" />
    </div>
  )
}
