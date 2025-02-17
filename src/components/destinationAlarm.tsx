import { TimeInput } from "@heroui/react";
import { Time } from "@internationalized/date";

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
      <TimeInput label="Колко време преди дестинацията Ви да Ви събудим?" />
    </div>
  );
}
export { App as DestinationAlarm };
