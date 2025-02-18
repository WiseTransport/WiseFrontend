import { TimeInput } from "@heroui/react";

export default function UpcomingAlarm() {
  return (
    <div className="flex flex-wrap gap-4">
      <TimeInput label="В колко часа да Ви подсетим?" />
    </div>
  );
}
