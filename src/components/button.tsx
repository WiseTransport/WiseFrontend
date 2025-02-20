import { Button } from "@heroui/react";

import MapPointSVG from "@/svg/MapPointSVG.tsx";

export default function App() {
  return (
    <div className="fixed bottom-8 h-24 right-8">
      <Button className="bg-white rounded-full px-0 min-w-0 w-12 h-12 shadow-md">
        <MapPointSVG classes="1" />
      </Button>
    </div>
  );
}
export { App as Button };
