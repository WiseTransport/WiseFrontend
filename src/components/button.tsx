import { Button } from "@heroui/react";

import MapPointSVG from "@/svg/MapPointSVG.tsx";

export default function App() {
  return (
    <div className="absolute bottom-14 z-50 right-4 ml-3 mr-3 ">
      <Button className="bg-white rounded-full px-0 min-w-0 w-12 h-12 shadow-md">
        <MapPointSVG classes="1" />
      </Button>
    </div>
  );
}
export { App as Button };
